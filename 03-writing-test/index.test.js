import { sum } from './index.js';
import assert from 'node:assert';
import { test } from 'node:test';

test('penjumlahan a dan b berhasil', () => {
    assert.strictEqual(sum(2,3), 5, '2 + 3 adalah 5');
    assert.strictEqual(sum(-1, -1), -2, '-1 + -1 adalah -2');
});