# npm-cd
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

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


## License

MIT © [akameco](http://akameco.github.io)
