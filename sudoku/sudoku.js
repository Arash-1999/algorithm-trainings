const sudoku = [
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


// check the givin number is valid in given row
const checkRow = (sudoku, row, a) => {
  for(let i = 0; i < 9; i++) {
    if(sudoku[row][i] === a) {
      return 0;
    }
  }

  return 1;
};

// check the givin number is valid in given column
const checkColumn = (sudoku, col, a) => {
  for(let i = 0; i < 9; i++) {
    if(sudoku[i][col] === a) {
      return 0;
    }
  }

  return 1;
};

// check the givin number is valid in the box
const checkBox = (sudoku, x, y, a) => {
  let xStart = x - x % 3,
    yStart = y - y % 3;


  for(let i = xStart; i < xStart + 3; i++) {
    for(let j = yStart; j < yStart + 3; j++) {
      if(sudoku[i][j] === a) return 0;
    }
  }

  return 1;
};

// find valid number for each cell
const findValids  = () => {
};

// find index of first empty cell
const findEmpty = (sudoku) => {
  for(let i = 0; i < 9; i++) {
    for(let j = 0; j < 9; j++) {
      if(sudoku[i][j] === 0) {
        return [i, j];
      }
    }
  }

  return 1;
};

// check the given number is valid in given cell
const isValid = (sudoku, x, y, a) => {
  if(
    checkRow(sudoku, x, a) &&
    checkColumn(sudoku, y, a) &&
    checkBox(sudoku, x, y, a)
  ) {
      return 1;
  };
  
  return 0;
};

// solve the whole puzzle
const solve = (sudoku) => {
  if(findEmpty(sudoku) === 1) return sudoku;

  let [x, y] = findEmpty(sudoku);
  for(let i = 1; i < 10; i++) {
    if(isValid(sudoku, x, y, i)){
      sudoku[x][y] = i;

      if(solve(sudoku)){
        return sudoku;
      }else {
        sudoku[x][y] = 0;
      }
    }
  }
  return 0;
};

module.exports = {checkRow, checkColumn, checkBox, isValid, findEmpty, solve};
