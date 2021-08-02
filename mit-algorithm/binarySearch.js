const arr = [12, 13, 14, 18, 33, 38, 42, 52, 53, 54, 55, 63, 71, 75, 79, 88, 89, 89, 98, 99];


const binarySearch = (arr, x, i, j) => {
  if(j - i === 1 && arr[i] !== x) return;
  let idx = i + Math.floor((j - i) / 2);

  if(arr[idx] === x) {
    return (idx);
  };

  if(arr[idx] < x) {
    return binarySearch(arr, x, idx, j);
  }else {
    return binarySearch(arr, x, i, idx);
  }
};


console.log("index of 63: ", binarySearch(arr, 63, 0, arr.length - 1));
console.log("index of 62: ", binarySearch(arr, 62, 0, arr.length - 1));
