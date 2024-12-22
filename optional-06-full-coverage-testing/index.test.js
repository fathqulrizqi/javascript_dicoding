import sum from './index.js';
import assert from 'node:assert';
import { test } from 'node:test';

test('fungsi sum', () => {
    assert.strictEqual(sum(2,3), 5, '2 + 3 adalah 5');

    assert.strictEqual(sum(2, 'a'), 0, 'is not a number');
    assert.strictEqual(sum('a', 2), 0, 'is not a number');
    assert.strictEqual(sum('a', 'a'), 0, 'is not a number');

    assert.strictEqual(sum(2, -1), 0, 'is not a number');
    assert.strictEqual(sum(-1, 2), 0, 'is not a number');
    assert.strictEqual(sum(-1, -1), 0, 'is not a number');
    
});