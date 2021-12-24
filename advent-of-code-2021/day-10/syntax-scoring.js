/*** SYNTAX SCORING ***/
/*** *** *** *** *** *** *** *** *** *** *** *** *** *** 

) ->  3 points.
] ->  57 points.
} ->  1197 points.
> ->  25137 points.

*** *** *** *** *** *** *** *** *** *** *** *** *** ***/

const fs = require("fs");

/*** *** ***/
// constants
const OPEN = "({[<";
const CLOSE = ")}]>";
const POINTS = {
  ")": 1,
  "]": 2,
  "}": 3,
  ">": 4,
};

/*** *** ***/

const data = fs.readFileSync("input");
const chunks = data.toString().trim().split("\n");

const errors = {
  ")": 0,
  "}": 0,
  "]": 0,
  ">": 0,
};
const incomplete_score = [];

const score_calculator = (arr) => {
  let res = 0;

  for (let i = 0, len = arr.length; i < len; i++) {
    res = res * 5;
    res += POINTS[arr[i]];
  }

  return res;
};

const check = (str) => {
  let closes = [];

  for (let i = 0, len = str.length; i < len; i++) {
    const index = OPEN.indexOf(str[i]);

    if (index > -1) {
      closes.unshift(CLOSE[index]);
    } else if (closes[0] === str[i]) {
      closes.shift();
    } else {
      // corrupted strings
      errors[str[i]] += 1;
      return;
    }
  }

  // incomplete strings
  incomplete_score.push(score_calculator(closes));

  return true;
};

for (let i = 0, len = chunks.length; i < len; i++) {
  check(chunks[i]);
}

const score =
  errors[")"] * 3 + errors["]"] * 57 + errors["}"] * 1197 + errors[">"] * 25137;

console.log("part 1: ", score);

incomplete_score.sort((a, b) => a - b);
console.log(
  "part 2: ",
  incomplete_score[parseInt((incomplete_score.length - 1) / 2)]
);
