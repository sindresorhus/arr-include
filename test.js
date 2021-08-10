import test from 'ava';
import arrayInclude from './index.js';

test('main', t => {
	t.deepEqual(arrayInclude(['a', 'b', 'c'], ['b']), ['b']);
	t.deepEqual(arrayInclude(['a', 'b'], ['a', 'x']), ['a']);
	t.deepEqual(arrayInclude(['a'], ['b']), []);
	t.deepEqual(arrayInclude([], ['a']), []);
	t.deepEqual(arrayInclude(['a'], []), []);
});
