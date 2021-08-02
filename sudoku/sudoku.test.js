const sudoku = require("./sudoku.js");

const puzzle  = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],

  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],

  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

const answer = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],

  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],

  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9],
]


// testing a valid number in given puzzle
test("4 is valid in first row", () => {
  expect(sudoku.checkRow(puzzle, 0, 2, 4)).toBeTruthy();
});
test("4 is valid in third column", () => {
  expect(sudoku.checkColumn(puzzle, 0, 2, 4)).toBeTruthy();
});
test("4 is valid in position 0, 2", () => {
  expect(sudoku.checkBox(puzzle, 0, 2, 4)).toBeTruthy();
});
test("4 is valid in position 0, 2", () => {
  expect(sudoku.isValid(puzzle, 0, 2, 4)).toBeTruthy();
});

// testing invalid cases
test("9 is invalid in positoin 1, 1", () => {
  expect(sudoku.isValid(puzzle, 1, 1, 0)).toBeFalsy();
});
test("5 is invalid in positoin 0, 3", () => {
  expect(sudoku.isValid(puzzle, 0, 3, 5)).toBeFalsy();
});
test("8 is invalid in positoin 0, 3", () => {
  expect(sudoku.isValid(puzzle, 0, 3, 8)).toBeFalsy();
});

//
test("first empty cell is 0, 2", () => {
  expect(sudoku.findEmpty(puzzle)).toEqual([0, 2]);
});


// testing the whole algorithm
test("check if the input is solved or not", () => {
  expect(sudoku.solve(answer)).toEqual(answer);
});
test("check the algorithm is capable of solving puzzle", () => {
  expect(sudoku.solve(puzzle)).toEqual(answer);
});
