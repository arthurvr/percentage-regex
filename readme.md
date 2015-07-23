# percentage-regex [![Build Status](https://travis-ci.org/arthurvr/percentage-regex.svg?branch=master)](https://travis-ci.org/arthurvr/percentage-regex)

> Regular expression to match percentage values


## Install

```
$ npm install --save percentage-regex
```


## Usage

```js
var percentageRegex = require('percentage-regex');

'I am 99% sure that was a unicorn'.match(percentageRegex());
//=> ['99%']

'I had 83% for maths and 68% for French'.match(percentageRegex());
//=> ['83%', '68%']

percentageRegex({exact: true}).test('88%');
//=> true
```

## API

### percentageRegex(options)

Returns a regex for matching percentage values.

#### options.exact

Type: `boolean`  
Default: `false` *(Matches any percentage in a string)*  

Only match an exact string. Useful with `RegExp#test` to check if some string is a percentage.


## License

MIT © [Arthur Verschaeve](http://arthurverschaeve.be)
