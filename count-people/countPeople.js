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
}

module.exports = CountSolutions;
