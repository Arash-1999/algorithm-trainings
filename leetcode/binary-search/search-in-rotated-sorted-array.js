/*** SEARCH IN ROTATED SORTED ARRAY ***/
/*** *** *** *** *** *** *** *** *** *** *** *** *** *** 
 There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
 *** *** *** *** *** *** *** *** *** *** *** *** *** ***/

/*** *** *** *** *** ***/
/*** examples ***/
// Example 1:
let nums1 = [4, 5, 6, 7, 0, 1, 2],
  target3 = 0; // Output: 4
// Example 2:
let nums2 = [4, 5, 6, 7, 0, 1, 2],
  target3 = 3; // Output: -1
// Example 3:
let nums3 = [1],
  target3 = 0; // Output: -1
/*** *** *** *** *** ***/

const search = (nums, target, i = 0, j = nums.length - 1) => {
  // nums doesn't contain target
  if (i > j) return -1;

  // index of middle eleemnt
  let mid = parseInt((i + j) / 2);
  if (nums[mid] === target) {
    // base case for terminating and returning index
    return mid;
  }

  if (nums[i] <= nums[mid]) {
    // left partition is sorted
    if (nums[i] <= target && nums[mid] > target) {
      // target is in sorted parition
      return search(nums, target, i, mid - 1);
    } else {
      return search(nums, target, mid + 1, j);
    }
  } else {
    // right partition is sorted
    if (nums[mid] < target && nums[j] >= target) {
      // target is in sorted parition
      return search(nums, target, mid + 1, j);
    } else {
      return search(nums, target, i, mid - 1);
    }
  }
};
