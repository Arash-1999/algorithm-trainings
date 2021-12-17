/*** BINARY DIAGNOSTIC ***/
/*** *** *** *** *** *** *** *** *** *** *** *** *** ***
 *** *** *** *** *** *** *** *** *** *** *** *** *** ***/

const fs = require("fs");

const data = fs.readFileSync("input");
const nums = data.toString().split("\n");
// const nums = [
//   "00100",
//   "11110",
//   "10110",
//   "10111",
//   "10101",
//   "01111",
//   "00111",
//   "11100",
//   "10000",
//   "11001",
//   "00010",
//   "01010",
// ];

// part 1:
const diagnose = (arr) => {
  const bit_len = arr[0].length;
  let gamma = "",
    epsilon = "";

  let ones = Array.from({ length: bit_len }, (_) => 0),
    zeroes = Array.from({ length: bit_len }, (_) => 0);

  for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0, item_len = arr[i].length; j < item_len; j++) {
      if (arr[i][j] == "0") {
        zeroes[j] += 1;
      } else if (arr[i][j] == "1") {
        ones[j] += 1;
      }
    }
  }

  for (let i = 0; i < bit_len; i++) {
    if (ones[i] > zeroes[i]) {
      gamma += "1";
      epsilon += "0";
    } else if (ones[i] < zeroes[i]) {
      gamma += "0";
      epsilon += "1";
    }
  }

  gamma = parseInt(gamma, 2);
  epsilon = parseInt(epsilon, 2);

  return [gamma, epsilon];
};

// part 2:
const diagnose_v2 = (arr) => {
  const bit_len = arr[0].length;
  let temp = [...arr];
  let o2 = "",
    co2 = "";

  // calculating O2
  for (let n = 0; n < bit_len; n++) {
    if (temp.length === 1) {
      o2 = temp[0];
      break;
    }
    let zeroes = [],
      ones = [];

    for (let j = 0, len = temp.length; j < len; j++) {
      if (temp[j][n] === "0") {
        zeroes.push(temp[j]);
      } else if (temp[j][n] === "1") {
        ones.push(temp[j]);
      }
    }

    if (zeroes.length > ones.length) {
      temp = zeroes;
    } else if (zeroes.length < ones.length) {
      temp = ones;
    } else {
      let str = zeroes[0];
      o2 = str[str.length - 1] === "1" ? str : ones[0];
      break;
    }
  }

  // restet temp variable
  temp = [...arr];

  // calculating CO2
  for (let n = 0; n < bit_len; n++) {
    if (temp.length === 1) {
      co2 = temp[0];
      break;
    }
    let zeroes = [],
      ones = [];

    for (let j = 0, len = temp.length; j < len; j++) {
      if (temp[j][n] === "0") {
        ones.push(temp[j]);
      } else if (temp[j][n] === "1") {
        zeroes.push(temp[j]);
      }
    }

    if (zeroes.length > ones.length) {
      temp = ones;
    } else if (zeroes.length < ones.length) {
      temp = zeroes;
    } else {
      let str = zeroes[0];
      co2 = str[n] == "0" ? str : ones[0];
      break;
    }
  }

  o2 = parseInt(o2, 2);
  co2 = parseInt(co2, 2);

  return [o2, co2];
};

// const [gamma, epsilon] = diagnose(nums);
// console.log(gamma * epsilon);

const [o2, co2] = diagnose_v2(nums);
console.log(o2 * co2);
