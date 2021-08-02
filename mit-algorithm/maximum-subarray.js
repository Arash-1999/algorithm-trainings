const arr = [13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7];

// find maximum subarray that crosses the middle item
const findMaxCrossing = (arr, low, mid, high) => {
  // start and end index of middle subarray
  let idxL = mid - 1, idxR = mid;
  // sum of middle subarray
  let left = -Infinity, right = -Infinity,
    sum = 0;

  // find max subarray in arr[low..mid - 1]
  for(let i = mid - 1; i >= 0; i--) {
    sum += arr[i];
    if(sum > left) {
      idxL = i;
      left = sum;
    };
  };

  // reset sum holder
  sum = 0;

  // find max subarray in arr[mid..high]
  for(let i = mid; i < high; i++) {
    sum += arr[i];
    if(sum > right) {
      idxR = i;
      right = sum;
    };
  };

  return {start: idxL, end: idxR, sum: left + right};
};

//
const findMaxSubarray = (arr, low, high) => {
  // base case
  if(high === low) {
    return {start: low, end: high, sum: arr[low]};
  };
  // find middle item of arr
  let mid = Math.floor((high + low) / 2);

  // find three posible states for subarrays
  let left = findMaxSubarray(arr, low, mid),
    right  = findMaxSubarray(arr, mid + 1, high),
    middle = findMaxCrossing(arr, low, mid, high);

  // compare three subarrays
  if(left.sum > middle.sum && left.sum > right.sum) {
    return left;
  }else if(right.sum > middle.sum && right.sum > left.sum) {
    return right;
  }else {
    return middle;
  };
};

console.log(findMaxSubarray(arr, 0, arr.length));
