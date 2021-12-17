const fs = require("fs");

const data = fs.readFileSync("input");
const nums = data.toString().split("\n");
// const nums = [
//   "forward 5",
//   "down 5",
//   "forward 8",
//   "up 3",
//   "down 8",
//   "forward 2",
// ];

for (let i = 0, len = nums.length; i < len; i++) {
  nums[i] = nums[i].split(" ");
}

const calculatePosition = (arr) => {
  let x = 0,
    y = 0;

  for (let i = 0, len = arr.length; i < len; i++) {
    switch (arr[i][0]) {
      case "up":
        y -= arr[i][1] * 1;
        break;
      case "down":
        y += arr[i][1] * 1;
        break;
      case "forward":
        x += arr[i][1] * 1;
        break;
      default:
        break;
    }
  }

  return [x, y];
};

const calculateAimedPosition = (arr) => {
  let x = 0,
    y = 0;
  let aim = 0;

  for (let i = 0, len = arr.length; i < len; i++) {
    switch (arr[i][0]) {
      case "up":
        // increase aim
        aim -= arr[i][1] * 1;
        break;
      case "down":
        // decrease aim
        aim += arr[i][1] * 1;
        break;
      case "forward":
        // calculate horizontal and vertical position
        x += arr[i][1] * 1;
        y += arr[i][1] * aim;
        break;
      default:
        break;
    }
  }

  return [x, y];
};

let [x, y] = calculatePosition(nums);
let [aimedX, aimedY] = calculateAimedPosition(nums);
console.log(aimedX * aimedY);
