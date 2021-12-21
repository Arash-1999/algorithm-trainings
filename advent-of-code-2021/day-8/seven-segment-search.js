/*** SEVEN SEGMENT SEARCH ***/

const fs = require("fs");

const data = fs.readFileSync("input");
//const data = fs.readFileSync("test");
const signals = data.toString().trim().split("\n");

for (let i = 0, len = signals.length; i < len; i++) {
  let [ten, four] = signals[i].split(" | ");
  signals[i] = [ten.split(" "), four.split(" ")];
}

// part 1: count 1, 4, 7, 8
const out = Array.from({ length: 10 }, (_) => 0);

for (let i = 0, len = signals.length; i < len; i++) {
  let item = signals[i][1];

  for (let j = 0; j < 4; j++) {
    switch (item[j].length) {
      case 2:
        // one
        out[1] += 1;
        break;
      case 4:
        // four
        out[4] += 1;
        break;
      case 3:
        // seven
        out[7] += 1;
        break;
      case 7:
        // eight
        out[8] += 1;
        break;
      default:
        break;
    }
  }
}

const sum = out.reduce((acc, a) => acc + a, 0);

console.log(sum);
