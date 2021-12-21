/*** SMOKE BUSIN ***/

const fs = require("fs");

// const data = fs.readFileSync("test");
const data = fs.readFileSync("input");
const nums = data.toString().trim().split("\n");

for (let i = 0, len = nums.length; i < len; i++) {
  nums[i] = nums[i]
    .trim()
    .split("")
    .map((el) => ({ value: el * 1, isUsed: false }));
}

const isLow = (arr, i, j) => {
  // value of current location
  const key = arr[i][j].value;

  // value of adjacent locations
  // store Infinity for edge locations
  let up = i === 0 ? +Infinity : arr[i - 1][j].value,
    down = i === arr.length - 1 ? +Infinity : arr[i + 1][j].value,
    left = j === 0 ? +Infinity : arr[i][j - 1].value,
    right = j === arr[i].length - 1 ? +Infinity : arr[i][j + 1].value;

  if (key < up && key < down && key < right && key < left) {
    // return risk level of low point
    return true;
  } else {
    return false;
  }
};

const grow = (arr, i, j) => {
  // check not current point is in danger area
  if (arr[i][j].value >= 9 || arr[i][j].isUsed) return;

  arr[i][j].isUsed = true;
  temp++;

  if (i !== 0) grow(arr, i - 1, j);
  if (j !== 0) grow(arr, i, j - 1);
  if (i !== arr.length - 1) grow(arr, i + 1, j);
  if (j !== arr[i].length - 1) grow(arr, i, j + 1);
};

const all = [];
const basins = [];

for (let i = 0, len = nums.length; i < len; i++) {
  for (let j = 0, len_i = nums[i].length; j < len_i; j++) {
    if (isLow(nums, i, j)) {
      all.push([i, j]);
    }
  }
}

let temp = 0;

for (let i = 0, len = all.length; i < len; i++) {
  temp = 0;

  grow(nums, all[i][0], all[i][1]);

  basins.push(temp);
}

const getThreeMax = (arr) => {
  let out = 1;
  let temp = [...arr];
  for (let i = 0; i < 3; i++) {
    const index = temp.indexOf(Math.max(...temp));
    out = out * temp.splice(index, 1);
  }

  return out;
};

console.log(getThreeMax(basins));
