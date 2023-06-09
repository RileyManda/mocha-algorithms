import assert from 'assert';
import CountSolutions from './countpeople.js';

describe('Count People', () => {
  it('Should return 0 if the room is empty', () => {
    const room = [];
    assert.strictEqual(CountSolutions.solution(room), 0);
    assert.strictEqual(CountSolutions.solution2(room), 0);
  });

  it('Should return the correct count for a non-empty room', () => {
    const room = ['Alice', 'Bob', 'Carol', 'Dave'];
    assert.strictEqual(CountSolutions.solution(room), 4);
    assert.strictEqual(CountSolutions.solution2(room), 4);
  });

  it('Should increment the count by 1 when there are exactly 2 people in the room', () => {
    const room = ['Alice', 'Bob'];
    assert.strictEqual(CountSolutions.solution(room), 3);
    assert.strictEqual(CountSolutions.solution2(room), 4);
  });
});
