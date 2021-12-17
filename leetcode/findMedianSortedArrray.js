/*** MEDIAN OF TWO SORTED ARRAY ***/
/*** *** ** *** *** *** *** *** *** *** *** ***/
/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/
/*** *** ** *** *** *** *** *** *** *** *** ***/

// const arr1 = [22, 22, 27, 28, 56, 79, 91];
// const arr2 = [19, 38, 44, 50, 58, 59, 69, 74, 91, 93, 93];
// exmaples
let a1 = [1, 3],
  a2 = [2]; // 2
let b1 = [1, 2],
  b2 = [3, 4]; // 2.5
let c1 = [0, 0],
  c2 = [0, 0]; // 0
let d1 = [1],
  d2 = []; // 1

const findMedianSortedArray = (a, b) => {
  let len = a.length + b.length,
    arr = [],
    i = 0,
    j = 0;

  a[a.length] = Infinity;
  b[b.length] = Infinity;

  for (let x = 0; x <= len >> 1; x++) {
    if (a[i] < b[j]) {
      arr[x] = a[i];
      i++;
    } else {
      arr[x] = b[j];
      j++;
    }
  }

  if (len % 2) {
    return arr[len >> 1];
  } else {
    return (arr[len >> 1] + arr[(len >> 1) - 1]) / 2;
  }
};

console.log(findMedianSortedArray(d1, d2));
