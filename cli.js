#!/usr/bin/env node
'use strict'
const meow = require('meow')
const npmCd = require('.')

const cli = meow(
  `
	Usage
    $ npm-cd [package name]

  Options
  --clear    clear all cache

	Examples
    $ npm-cd redux
        exists /Users/akameco/src/github.com/reactjs/redux
        cd /Users/akameco/src/github.com/reactjs/redux
`,
  { flags: { clear: { type: 'boolean' } } }
)

if (cli.flags.clear) {
  npmCd.clear()
  return
}

npmCd(cli.input[0]).catch(err => {
  console.error(err) // eslint-disable-line no-console
})
