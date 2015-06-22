# percentage-regex [![Build Status](https://travis-ci.org/arthurvr/percentage-regex.svg?branch=master)](https://travis-ci.org/arthurvr/percentage-regex)

> Regular expression to match percentage values


## Install

```
$ npm install --save percentage-regex
```


## Usage

```js
var percentageRegex = require('percentage-regex');

percentageRegex.test('88%');
//=> true

percentageRegex.test('88.5%');
//=> true

percentageRegex.test('69 %');
//=> true

percentageRegex.test('69');
//=> false
```


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
