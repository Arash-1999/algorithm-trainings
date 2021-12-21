/*** SMOKE BUSIN ***/

const fs = require("fs");

//const data = fs.readFileSync("test");
const data = fs.readFileSync("input");
const nums = data.toString().trim().split("\n");

const isLow = (arr, i, j) => {
	// value of current location
	const key = arr[i][j] * 1;
	
	// value of adjacent locations
	// store Infinity for edge locations
	let up = i === 0 ? +Infinity : arr[i - 1][j] * 1,
		down = i === arr.length - 1 ? +Infinity : arr[i + 1][j] * 1,
		left = j === 0 ? +Infinity : arr[i][j - 1] * 1,
		right = j === arr[i].length - 1 ? +Infinity : arr[i][j + 1] * 1;

	if (key < up && key < down && key < right && key < left) {
		// return risk level of low point
		return key + 1;
	}else {
		return 0;
	}
};

let total_risk = 0;

for(let i = 0, len = nums.length; i < len; i++) {
	for(let j = 0, len_i = nums[i].length; j < len_i; j++) {
		total_risk += isLow(nums, i, j);
	}
}

console.log(total_risk);
