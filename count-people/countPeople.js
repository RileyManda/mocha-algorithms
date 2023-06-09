export default class CountSolutions {
  static binarySolution(room) {
    if (room.length === 0) {
      return 0; // Base case: empty room
    }

    const count = 1 + CountSolutions.binarySolution(room.slice(1)); // Recursive call

    return count;
  }

  static linkedListSolution(room) {
    if (room === null) {
      return 0; // Base case: end of linked list
    }

    const count = 1 + CountSolutions.linkedListSolution(room.next); // Recursive call

    return count;
  }

  static binarySearchSolution(room, start, end, target) {
    if (start > end) {
      return 0; // Base case: element not found
    }

    const mid = Math.floor((start + end) / 2);

    if (room[mid] === target) {
      return 1; // Base case: element found
    }
    if (room[mid] < target) {
      // Recursive call on the right half
      return CountSolutions.binarySearchSolution(room, mid + 1, end, target);
    }
    // Recursive call on the left half
    return CountSolutions.binarySearchSolution(room, start, mid - 1, target);
  }

  static mergeSortSolution(room) {
    if (room.length <= 1) {
      return room.length; // Base case: already sorted
    }

    const mid = Math.floor(room.length / 2);
    const left = room.slice(0, mid);
    const right = room.slice(mid);

    return (
      CountSolutions.mergeSortSolution(left)
      + CountSolutions.mergeSortSolution(right)
    ); // Recursive calls on the two halves
  }

  static quickSortSolution(room, start, end) {
    if (start >= end) {
      return; // Base case: subarray sorted
    }

    const pivotIndex = CountSolutions.partition(room, start, end); // Find pivot index

    CountSolutions.quickSortSolution(room, start, pivotIndex - 1);

    CountSolutions.quickSortSolution(room, pivotIndex + 1, end); // Recursive call on right subarray
  }

  static partition(room, start, end) {
    const pivot = room[end];
    let i = start;

    // eslint-disable-next-line no-plusplus
    for (let j = start; j < end; j++) {
      if (room[j] <= pivot) {
        CountSolutions.swap(room, i, j);
        i += 1;
      }
    }

    CountSolutions.swap(room, i, end);

    return i;
  }

  static swap(room, i, j) {
    const temp = room[i];
    room[i] = room[j];
    room[j] = temp;
  }

  static binarySearchTreeSolution(node) {
    if (node === null) {
      return 0; // Base case: empty tree
    }

    const leftCount = CountSolutions.binarySearchTreeSolution(node.left);
    const rightCount = CountSolutions.binarySearchTreeSolution(node.right);

    const count = leftCount + rightCount + 1; // Counting nodes

    return count;
  }
}

// module.exports = CountSolutions;
