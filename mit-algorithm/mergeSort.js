const arr = [33, 38, 54, 55, 42, 71, 89, 53, 75, 12, 13, 18, 99, 98, 63, 79, 88, 14, 52, 89];

const merge = (left, right) => {
  let result = [];
  let i = 0, j = 0, x = 0;
  let n1 = left.length, n2 = right.length;
  
  left[left.length] = Infinity;
  right[right.length] = Infinity;

  for(let x = 0; x < n1 + n2; x++) {
    if(left[i] < right[j]) {
      result[x] = left[i];
      i++;
    }else {
      result[x] = right[j];
      j++;
    }
  }
  
  return result;
};

const mergeSort = (arr) => {
  if(arr.length === 1) {
    return arr;
  };

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)),
    right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

console.log(mergeSort(arr));
