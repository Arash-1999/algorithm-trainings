const a = [31, 41, 72, 1, 92, 100, 59, 26, 13, 61, 41, 58];

const incSort = (arg) => {
  let arr = [...arg], n = arg.length;

  for(let i = 0; i < n - 1; i++) {
    let min = arr[i],
      current = arr[i],
      idx;

    for(let j = i; j < n; j++) {
      if(arr[j] <= min) {
        min = arr[j];
        idx = j;
      }
    }

    arr[i] = min;
    arr[idx] = current;
  }

  return arr;
};

console.log(incSort(a));
