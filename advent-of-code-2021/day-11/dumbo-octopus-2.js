/*** DUMBO OCTOPUS ***/

const fs = require("fs");

const data = fs.readFileSync("input");
const energies = data.toString().trim().split("\n");

for (let i = 0, len = energies.length; i < len; i++) {
  energies[i] = energies[i]
    .trim()
    .split("")
    .map((el) => el * 1);
}

let flashes = 0;

const count = (arr = energies) => {
  let counter = 0;

  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0, len_i = arr[i].length; j < len_i; j++) {
      if (arr[i][j] === -1) {
        counter++;
        arr[i][j] = 0;
      }
    }
  }

  return counter;
};

const inc_adjacents = (arr, x, y) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let px = x + i - 1,
        py = y + j - 1;

      if (
        px >= 0 &&
        py >= 0 &&
        px < arr.length &&
        py < arr[x].length &&
        arr[px][py] > -1
      ) {
        arr[px][py] += 1;
        if (arr[px][py] > 9) {
          arr[px][py] = -1;
          inc_adjacents(arr, px, py);
        }
      }
    }
  }
};

const evolution = (arr = energies) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0, len_i = arr[i].length; j < len_i; j++) {
      if (arr[i][j] > -1) {
        arr[i][j] += 1;
      }

      if (arr[i][j] > 9) {
        arr[i][j] = -1;
        inc_adjacents(energies, i, j);
      }
    }
  }

  flashes = count();
};

let step = 0;

while (flashes !== 100) {
  evolution();
  step++;
}

console.log(step);
