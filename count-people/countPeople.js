class CountSolutions {
  static solution(room) {
    let count = room.length;

    if (count === 2) {
      count += 1;
    }

    return count;
  }

  static solution2(room) {
    let count = room.length;

    if (count === 2) {
      count += 2;
    }

    return count;
  }

  static solution3(room) {
    let count = room.length;

    if (count === 2) {
      count += 2;
    }

    return count;
  }
}
export default CountSolutions;