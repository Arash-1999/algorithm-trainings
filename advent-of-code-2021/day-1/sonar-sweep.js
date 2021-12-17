/*** SONAR SWEEP ***/
/*** *** *** *** *** *** *** *** *** *** *** *** 
part 1:
count increses in input array
[199, 200, 208, 210, 200, 207, 240, 269, 260, 263] -> 7

part 2:
count increases in array of sum of three
[199, 200, 208, 210, 200, 207, 240, 269, 260, 263] -> [607, 618, 618, 617, 647, 716, 769, 792] -> 5
*** *** *** *** *** *** *** *** *** *** *** ***/
const fs = require("fs");

// read data from file
const data = fs.readFileSync("input");
// convert readen data to array
const nums = data.toString().split("\n");

const countIncreases = (arr) => {
  let result = 0;

  for (let i = 1, len = arr.length; i < len; i += 2) {
    // multiplying by one to ensure the type of array items is number
    if (arr[i] * 1 > arr[i - 1] * 1) result++;
    if (arr[i + 1] * 1 > arr[i] * 1) result++;
  }

  return result;
};

const createSumOf3 = (arr) => {
  const result = [];

  for (let i = 0, len = arr.length - 2; i < len; i++) {
    result[i] = arr[i] * 1 + arr[i + 1] * 1 + arr[i + 2] * 1;
  }

  return result;
};

console.log("answer of part one:");
console.log(countIncreases(nums));

console.log("answer of part two:");
const sumOf3 = createSumOf3(nums);
console.log(countIncreases(sumOf3));
