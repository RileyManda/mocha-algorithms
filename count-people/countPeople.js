function countPeople(room) {
  let count = room.length;

  if (count === 2) {
    count = count + 1;
  }

  return count;
}

module.exports = countPeople;
