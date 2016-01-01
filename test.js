import test from 'ava';
import m from './';

test(t => {
	t.same(m(['a', 'b', 'c'], ['b']), ['b']);
	t.same(m(['a', 'b'], ['a', 'x']), ['a']);
	t.same(m(['a'], ['b']), []);
	t.same(m(null, ['a']), []);
});
