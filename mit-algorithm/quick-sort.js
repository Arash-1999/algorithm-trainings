const arr = [33, 38, 54, 55, 42, 71, 89, 53, 75, 12, 13, 18, 99, 98, 63, 79, 88, 14, 52, 89];

const partition = (arr, p, r) => {
  let key = arr[r];
  let i = p - 1;
  
  for(let j = p; j <= r; j++) {
    if(arr[j] < key) {
      i++;
      let x = arr[j];
      arr[j] = arr[i];
      arr[i] = x;
    };
  };
  arr[r] = arr[i + 1];
  arr[i + 1] = key;

  return i + 1;
};

const quickSort = (arr, p, r) => {
  if(p < r) {
    q = partition(arr, p, r);
    quickSort(arr, p, q - 1);
    quickSort(arr, q + 1, r);
  };
  return arr;
}

console.log(quickSort(arr, 0, arr.length - 1));
