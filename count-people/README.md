# Counting People in a Room

## Table of Contents
- [Description](#description)
- [Test Cases](#test-cases)
  - [Test 1 - Empty Room](#test-1---empty-room)
  - [Test 2 - Non-Empty Room](#test-2---non-empty-room)
  - [Test 3 - Increment for Two People](#test-3---increment-for-two-people)
- [Implementation](#implementation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Description

You are given a task to count the number of people in a room. Your goal is to write an algorithm that takes a list of names representing the people in the room and returns the count of people.

## Test Cases

### Test 1 - Empty Room

**Input:** An empty list of names, indicating that the room is empty.

**Expected Output:** The count of people should be 0 since there are no names in the list.

### Test 2 - Non-Empty Room

**Input:** A list of names containing several names of people in the room.

**Expected Output:** The count of people should be the total number of names in the list.

### Test 3 - Increment for Two People

**Input:** A list of names containing exactly two names.

**Expected Output:** The count of people should be the number of names in the list plus 1. Since there are two people in the room, the count should be incremented by 1.

## Implementation

The algorithm uses a simple approach to count the number of people in a room based on the provided list of names.

Simple solution breakdown:

```javascript
function countPeople(room) {
let count = room.length;

if (count === 2) {
count += 1;
}

return count;
}
```
Simple Solution with comments:
```javascript
// Function declaration, takes 'room' as an argument
function countPeople(room) { 
  let count = room.length; // Assigns the length of 'room' array to 'count' variable

  if (count === 2) { // Checks if 'count' is equal to 2
    count += 1; // If true, increments 'count' by 1
  }

  return count; // Returns the value of 'count'
}
```


The time complexity of the given algorithm is constant time, denoted as O(1). 

The algorithm does not contain any loops or recursive calls. It simply performs a constant number of operations regardless of the size of the input. The only operation performed is checking the length of the "room" array, which takes constant time. Therefore, the algorithm's time complexity remains constant regardless of the size of the input.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository.
```
https://github.com/RileyManda/mocha-algorithms.git
```
2. Install the necessary dependencies.
```
npm i
```
Or 
```
yarn i
```
3. Run the tests to verify the correctness of your algorithm.

## Contributing

Contributions are welcome! If you have any improvements or suggestions, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
