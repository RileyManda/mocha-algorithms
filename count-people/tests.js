const countPeople = require('./countPeople');
const assert = require('assert');

describe('Count People', function () {
  it('Should return 0 if the room is empty', function () {
    const room = [];
    assert.strictEqual(countPeople(room), 0);
  });

  it('Should return the correct count for a non-empty room', function () {
    const room = ['Alice', 'Bob', 'Carol', 'Dave'];
    assert.strictEqual(countPeople(room), 4);
  });

  it('Should increment the count by 1 when there are exactly 2 people in the room', function () {
    const room = ['Alice', 'Bob'];
    assert.strictEqual(countPeople(room), 3);
  });
});
