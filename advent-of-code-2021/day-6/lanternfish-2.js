/*** LANTERNFISH PART 2 ***/
/*** *** 
in second part i should make my program optimized

for this :
1. create a array of all possible timer values
2. each day shift array one index
3. also add number of new fishes to those born in spcific day
 *** ***/

const fs = require("fs");

const data = fs.readFileSync("input");
const nums = data.toString().trim().split(",");
// const nums = [3, 4, 3, 1, 2];

// array of zeroes
let state = Array.from({ length: 9 }, (_) => 0);

// store timer values for each fish in state array
for (let i = 0, len = nums.length; i < len; i++) {
  state[nums[i] * 1] += 1;
}

for (let i = 0; i < 256; i++) {
  // pass one day
  let newFishes = state[0];
  state = state.slice(1).concat(state[0]);
  state[6] += newFishes;
}

// calculate number of all lanternfishes
const sumAll = (arr) => arr.reduce((acc, a) => acc + a, 0);

let out = sumAll(state);
console.log(out);
