const binary_sqrt = (n) => {
  // square root of integer n always is between 0, n
  let start = 0,
    end = n;

  while (start <= end) {
    // calcualte the middle element
    let mid = parseInt((start + end) / 2);

    if (mid * mid === n) {
      // answer founded
      return mid;
    } else if (mid * mid < n) {
      // search right side
      start = mid + 1;
    } else {
      // search left side
      end = mid - 1;
    }
  }

  // if answer not founed in loop return value of end of iterval
  return end;
};

console.log(`square root of ${4} is ${binary_sqrt(4)}`);
console.log(`square root of ${8} is ${binary_sqrt(8)}`);
console.log(`square root of ${12} is ${binary_sqrt(12)}`);
