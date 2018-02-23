# npm-cd

[![Greenkeeper badge](https://badges.greenkeeper.io/akameco/npm-cd.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/akameco/npm-cd.svg?branch=master)](https://travis-ci.org/akameco/npm-cd)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

> cd npm pkg dir after git clone pkg when it not exist

[![https://gyazo.com/605847c450b8d82926e56b1f4cbb90fe](https://i.gyazo.com/605847c450b8d82926e56b1f4cbb90fe.gif)](https://gyazo.com/605847c450b8d82926e56b1f4cbb90fe)

## Install

```
$ npm install --global npm-cd
```

## CLI

```
$ npm-cd --help

  cd npm pkg dir after git clone pkg when it not exist

  Usage
     $ npm-cd [package name]

   Options
   --clear    clear all cache

  Examples
     $ npm-cd redux
         exists /Users/akameco/src/github.com/reactjs/redux
         cd /Users/akameco/src/github.com/reactjs/redux
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/4002137?v=4" width="100px;"/><br /><sub><b>akameco</b></sub>](http://akameco.github.io)<br />[💻](https://github.com/akameco/npm-cd/commits?author=akameco "Code") [📖](https://github.com/akameco/npm-cd/commits?author=akameco "Documentation") [⚠️](https://github.com/akameco/npm-cd/commits?author=akameco "Tests") [🚇](#infra-akameco "Infrastructure (Hosting, Build-Tools, etc)") |
| :---: |

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!

## License

MIT © [akameco](http://akameco.github.io)
