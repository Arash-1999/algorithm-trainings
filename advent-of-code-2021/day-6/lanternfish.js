/*** LANTERNFISH ***/
/*** *** *** *** *** *** *** *** *** *** *** *** *** ***
 *** *** *** *** *** *** *** *** *** *** *** ***  *** ***/

const fs = require("fs");

const data = fs.readFileSync("input");
const nums = data.toString().trim().split(",");

for (let i = 0, len = nums.length; i < len; i++) {
  nums[i] = nums[i] * 1;
}

const evolution = (arr) => {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === 0) {
      arr[i] = 6;
      arr.push(8);
    } else {
      arr[i] -= 1;
    }
  }
};

for (let i = 0; i < 80; i++) {
  evolution(nums);
}

console.log(nums.length);
