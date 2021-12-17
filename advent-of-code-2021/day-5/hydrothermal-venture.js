/*** HYDROTHERMAL VENTURE ***/
/*** *** *** *** *** *** *** *** *** *** *** *** *** ***
 *** *** *** *** *** *** *** *** *** *** *** *** *** ***/
const fs = require("fs");

// read data from input file
const data = fs.readFileSync("input");
const points = data.toString().trim().split("\n");

// create array of lines
let x_max = -Infinity,
  y_max = -Infinity;
for (let i = 0, len = points.length; i < len; i++) {
  let coord = points[i].split(" -> ");
  points[i] = [coord[0].split(","), coord[1].split(",")];

  // find maximum of x
  if (x_max < points[i][0][0] * 1) {
    x_max = points[i][0][0] * 1;
  }
  if (x_max < points[i][1][0] * 1) {
    x_max = points[i][1][0] * 1;
  }
  // find maximum of y
  if (y_max < points[i][0][1] * 1) {
    y_max = points[i][0][1] * 1;
  }
  if (y_max < points[i][1][1] * 1) {
    y_max = points[i][1][1] * 1;
  }
}

const board = Array.from({ length: y_max + 1 }, (_) =>
  Array.from({ length: x_max + 1 }, (_) => 0)
);

for (let i = 0, len = points.length; i < len; i++) {
  let [p1, p2] = points[i];

  if (p1[0] == p2[0]) {
    // vertical line
    let diff = Math.abs(p1[1] * 1 - p2[1] * 1),
      start = Math.min(p1[1], p2[1]);

    for (let i = 0; i <= diff; i++) {
      board[start + i][p1[0]] += 1;
    }
  }
  if (p1[1] == p2[1]) {
    // horizontal line
    let diff = Math.abs(p1[0] * 1 - p2[0] * 1),
      start = Math.min(p1[0], p2[0]);

    for (let i = 0; i <= diff; i++) {
      board[p1[1]][start + i] += 1;
    }
  }

  /*** part 2: add diagonal lines to board ***/
  /*** if you want answer of first part remove this section ***/
  /*** *** ***/
  if (Math.abs(p1[0] * 1 - p2[0] * 1) === Math.abs(p1[1] * 1 - p2[1] * 1)) {
    if (
      (p1[0] * 1 < p2[0] && p1[1] * 1 < p2[1] * 1) ||
      (p1[0] * 1 > p2[0] && p1[1] * 1 > p2[1] * 1)
    ) {
      let start_v = Math.min(p1[1] * 1, p2[1] * 1),
        start_h = Math.min(p1[0] * 1, p2[0] * 1),
        diff = Math.abs(p1[1] * 1 - p2[1] * 1);

      for (let i = 0; i <= diff; i++) {
        board[start_v + i][start_h + i] += 1;
      }
    } else {
      let start_v = Math.min(p1[1] * 1, p2[1] * 1),
        start_h = Math.max(p1[0] * 1, p2[0] * 1),
        diff = Math.abs(p1[1] * 1 - p2[1] * 1);

      for (let i = 0; i <= diff; i++) {
        board[start_v + i][start_h - i] += 1;
      }
    }
  }
  /*** *** ***/
}

// counting number of dangerous areas
let count = 0;
for (let i = 0; i <= y_max; i++) {
  for (let j = 0; j <= x_max; j++) {
    if (board[i][j] > 1) count++;
  }
}
console.log(count);
