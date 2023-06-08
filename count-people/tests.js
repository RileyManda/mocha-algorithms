const assert = require('assert');
const Solution = require('./countPeople.js');

describe('Count People', () => {
  it('Should return 0 if the room is empty', () => {
    const room = [];
    assert.strictEqual(Solution.solution(room), 0);
    assert.strictEqual(Solution.solution2(room), 0);
  });

  it('Should return the correct count for a non-empty room', () => {
    const room = ['Alice', 'Bob', 'Carol', 'Dave'];
    assert.strictEqual(Solution.solution(room), 4);
    assert.strictEqual(Solution.solution2(room), 4);
  });

  it('Should increment the count by 1 when there are exactly 2 people in the room', () => {
    const room = ['Alice', 'Bob'];
    assert.strictEqual(Solution.solution(room), 3);
    assert.strictEqual(Solution.solution2(room), 4);
  });
});
