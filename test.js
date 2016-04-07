import test from 'ava';
import m from './';

test(t => {
	t.deepEqual(m(['a', 'b', 'c'], ['b']), ['b']);
	t.deepEqual(m(['a', 'b'], ['a', 'x']), ['a']);
	t.deepEqual(m(['a'], ['b']), []);
	t.deepEqual(m(null, ['a']), []);
});
