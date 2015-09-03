'use strict';
var test = require('ava');
var fn = require('./');

test(function (t) {
	t.same(fn(['a', 'b', 'c'], ['b']), ['b']);
	t.same(fn(['a', 'b'], ['a', 'x']), ['a']);
	t.same(fn(['a'], ['b']), []);
	t.same(fn(null, ['a']), []);
	t.end();
});
