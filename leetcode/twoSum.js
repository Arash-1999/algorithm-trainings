/*** TWO SUM ***/
/*** *** *** *** *** *** *** *** *** *** *** *** *** *** 
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*** *** *** *** *** *** *** *** *** *** *** *** *** ***/

// examples
let nums_1 = [2, 7, 11, 15],
  target_1 = 9; // [0, 1]
let nums_2 = [3, 2, 4],
  target_2 = 6; // [1, 2]
let nums_3 = [3, 3],
  target_3 = 6; // [0, 1]

const twoSum = (nums, target) => {
  let map = {};

  for (let i = 0, len = nums.length; i < len; i++) {
    map[nums[i]] = i;
  }

  for (let i = 0, len = nums.length; i < len; i++) {
    if (map.hasOwnProperty(target - nums[i]) && map[target - nums[i]] !== i) {
      return [map[target - nums[i]], i];
    }
  }
};
