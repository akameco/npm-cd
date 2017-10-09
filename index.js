// @flow
'use strict'
const Conf = require('conf')
const execa = require('execa')
const packageJson = require('package-json')

const conf = new Conf()

const getRepoUrl = (pkg /* : string */) =>
  packageJson(pkg, { fullMetadata: true }).then(obj => obj.repository.url)

const shellOpts = {
  stdio: 'inherit',
  shell: true
}

const runGhq = (repo /* : string */) =>
  execa('ghq', ['get', '-p', repo], shellOpts)

const runGhqLook = (repo /* : string */) =>
  execa('ghq', ['look', repo], shellOpts)

module.exports = (pkg /* : string */) => {
  if (typeof pkg !== 'string') {
    return Promise.reject(new TypeError(`Expected a string, got ${typeof pkg}`))
  }

  const repo = conf.get(pkg)

  const repoPromise = repo ? Promise.resolve(repo) : getRepoUrl(pkg)

  return repoPromise
    .then(repo => {
      conf.set(pkg, repo)
      return repo
    })
    .then(repoUrl => runGhq(repoUrl).then(() => repoUrl))
    .then(runGhqLook)
}

module.exports.clear = () => {
  conf.clear()
}
