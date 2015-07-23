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
	'0%',
	'.5%',
	'.05%',
	'.05 %'
];

shouldPass.forEach(function (fixture) {
	it('exact regex should match `' + fixture + '`', function () {
		assert(percentageRegex({exact: true}).test(fixture));
	});
});

var shouldFail = [
	'',
	'   ',
	'foobar',
	'10',
	'10.0',
	'10.00',
	'.5',
	'.5 ',
	'1..00%',
	'%%',
	'%',
	'.',
	' %',
	'. 5%',
	'.%',
	'. %',
	'..5%',
	'. 5%',
	'.\t5%',
	'.5.5%',
	'12.%'
];

shouldFail.forEach(function (fixture) {
	it('exact regex should not match `' + fixture + '`', function () {
		assert(!percentageRegex({exact: true}).test(fixture));
	});
});

it('non-exact regex should match all percentages in a string', function () {
	assert.deepEqual('10%'.match(percentageRegex({exact: false})), ['10%']);
	assert.deepEqual('foo 10% bar'.match(percentageRegex({exact: false})), ['10%']);
	assert.deepEqual('foo 10%'.match(percentageRegex({exact: false})), ['10%']);
	assert.deepEqual('.5% 10%'.match(percentageRegex({exact: false})), ['.5%', '10%']);
	assert.deepEqual('foo .5% 10%'.match(percentageRegex({exact: false})), ['.5%', '10%']);
	assert.deepEqual('foo .5% 10% bar'.match(percentageRegex({exact: false})), ['.5%', '10%']);
	assert.deepEqual('.5% 10% bar'.match(percentageRegex({exact: false})), ['.5%', '10%']);
	assert.deepEqual('0% 10% bar'.match(percentageRegex({exact: false})), ['0%', '10%']);
});

it('exact should default to false', function () {
	assert.deepEqual('foo 10% bar'.match(percentageRegex()), ['10%']);
});
