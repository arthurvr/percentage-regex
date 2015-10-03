import test from 'ava';
import percentageRegex from './';

const shouldPass = [
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

shouldPass.forEach(fixture => {
	test('exact regex should match `' + fixture + '`', t => {
		t.true(percentageRegex({exact: true}).test(fixture));
		t.end();
	});
});

const shouldFail = [
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

shouldFail.forEach(fixture => {
	test('exact regex should not match `' + fixture + '`', t => {
		t.false(percentageRegex({exact: true}).test(fixture));
		t.end();
	});
});

test('non-exact regex should match all percentages in a string', t => {
	t.same('10%'.match(percentageRegex({exact: false})), ['10%']);
	t.same('foo 10% bar'.match(percentageRegex({exact: false})), ['10%']);
	t.same('foo 10%'.match(percentageRegex({exact: false})), ['10%']);
	t.same('.5% 10%'.match(percentageRegex({exact: false})), ['.5%', '10%']);
	t.same('foo .5% 10%'.match(percentageRegex({exact: false})), ['.5%', '10%']);
	t.same('foo .5% 10% bar'.match(percentageRegex({exact: false})), ['.5%', '10%']);
	t.same('.5% 10% bar'.match(percentageRegex({exact: false})), ['.5%', '10%']);
	t.same('0% 10% bar'.match(percentageRegex({exact: false})), ['0%', '10%']);

	t.end();
});

test('exact should default to false', t => {
	t.same('foo 10% bar'.match(percentageRegex()), ['10%']);
	t.end();
});
