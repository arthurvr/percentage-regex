'use strict';
var assert = require('assert');
var percentageRegex = require('./');

var shouldPass = [
	'19%',
	'10.0%',
	'1%',
	'1.0%',
	'1.00%',
	'1 %',
	'39 %',
	'1.00 %',
	'0%'
];

shouldPass.forEach(function (fixture) {
	it('should match `' + fixture + '`', function () {
		assert(percentageRegex.test(fixture));
	});
});

var shouldFail = [
	'foobar',
	'10',
	'10.0',
	'10.00',
	'1..00%',
	'%%',
	'%',
	''
];

shouldFail.forEach(function (fixture) {
	it('should not match `' + fixture + '`', function () {
		assert(!percentageRegex.test(fixture));
	});
});
