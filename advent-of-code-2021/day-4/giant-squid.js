/*** GIANT SQUID ***/
/*** *** *** *** *** *** *** *** *** *** *** *** *** ***
 *** *** *** *** *** *** *** *** *** *** *** *** *** ***/

const fs = require("fs");

// read data from file
const data = fs.readFileSync("input");
let [nums, ...boards] = data.toString().trim().split("\n\n");
nums = nums.split(",");

class Board {
  constructor(nums) {
    this.nums = nums;
  }

  isWinner() {
    // check for complete row or column
    for (let i = 0; i < this.nums.length; i++) {
      if (
        this.nums[i].every((item) => item[1]) ||
        this.nums.every((item) => item[i][1])
      ) {
        return true;
      }
    }

    return false;
  }

  checkNumber(num) {
    // check the board has given number
    for (let i = 0; i < this.nums.length; i++) {
      for (let j = 0; j < this.nums[i].length; j++) {
        if (this.nums[i][j][0] === num) {
          this.nums[i][j][1] = true;
        }
      }
    }

    return this.isWinner();
  }

  getSum() {
    let result = 0;

    for (let i = 0; i < this.nums.length; i++) {
      for (let j = 0; j < this.nums[i].length; j++) {
        if (!this.nums[i][j][1]) {
          result += this.nums[i][j][0] * 1;
        }
      }
    }

    return result;
  }
}

// declare a list of boards
const all_boards = [];

for (let i = 0, len = boards.length; i < len; i++) {
  let item = boards[i].split("\n");

  for (let j = 0; j < item.length; j++) {
    let row = item[j].trim().replace(/\s+/g, " ").split(" ");
    for (let k = 0; k < row.length; k++) {
      row[k] = [row[k], false];
    }
    item[j] = row;
  }

  all_boards.push(new Board(item));
}

/*** **** ***/
// part1: finding first winner
const evolution = (num) => {
  // read a number and check it in all boards
  for (let i = 0, len = all_boards.length; i < len; i++) {
    if (all_boards[i].checkNumber(num)) return i;
  }
};

// play game 'till finding first winner
const play = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let out = evolution(nums[i]);
    if (out) {
      return [out, nums[i]];
    }
  }
};

const [index, last_num] = play(nums);
const score = all_boards[index].getSum();
console.log(score * last_num);
/*** **** ***/

/*** **** ***/
// part 2: finding last wineer
const evolution_v2 = (num) => {
  // read a number and check it in all boards
  let winners = [];

  for (let i = 0, len = all_boards.length; i < len; i++) {
    if (all_boards[i].checkNumber(num)) {
      winners.push(i);
    }
  }

  for (let i = 0; i < winners.length; i++) {
    if (all_boards.length === 1) return true;
    all_boards.splice(winners[i] - i, 1);
  }
};

const play_v2 = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let end = evolution_v2(nums[i]);
    if (end) return nums[i];
  }
};

let num = play_v2(nums);
console.log(all_boards[0].getSum() * num);
/*** **** ***/
