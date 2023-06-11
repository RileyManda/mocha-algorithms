import assert from 'assert';
import CountSolutions from './countPeople.js';

describe('Count People', () => {
  it('Should return 0 if the room is empty', () => {
    const room = [];
    assert.strictEqual(CountSolutions.binarySolution(room), 0);
    assert.strictEqual(CountSolutions.linkedListSolution(room), 0);
  });

  it('Should return the correct count for a non-empty room', () => {
    const room = [1, 2, 3, 4, 5]; // Non-empty room
    const count = CountSolutions.binarySolution(room);
    assert.strictEqual(count, 5);
  });

  it('Should increment the count by 1 when there are exactly 2 people in the room', () => {
    const room = [1, 2]; // Room with exactly 2 people
    const count = CountSolutions.binarySolution(room);
    assert.strictEqual(count, 2);
  });
});
