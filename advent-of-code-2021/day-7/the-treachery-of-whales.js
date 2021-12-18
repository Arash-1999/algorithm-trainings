/*** THE TREACHERY OF WHALES ***/

const fs = require("fs");

const data = fs.readFileSync("input");
const nums = data.toString().trim().split(",");
// const nums = [16, 1, 2, 0, 4, 2, 7, 1, 2, 14];

for (let i = 0, len = nums.length; i < len; i++) {
  nums[i] = nums[i] * 1;
}

let sum = nums.reduce((acc, a) => acc + a, 0);
const max = Math.max(...nums);

// part 1:
let out_1 = [];
for (let i = 0; i <= max; i++) {
  let total_fuel = 0;
  for (let j = 0, len = nums.length; j < len; j++) {
    total_fuel += Math.abs(nums[j] - i);
  }
  out_1[i] = total_fuel;
}

console.log("first part answer: ", Math.min(...out_1));

// part 2:
let out_2 = [];
for (let i = 0; i <= max; i++) {
  let total_fuel = 0;
  for (let j = 0, len = nums.length; j < len; j++) {
    let n = Math.abs(nums[j] - i);
    total_fuel += (n * (n + 1)) / 2;
  }
  out_2[i] = total_fuel;
}

console.log("second part answer: ", Math.min(...out_2));
