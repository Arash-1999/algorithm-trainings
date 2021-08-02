let a = [31, 41, 59, 26, 41, 58];

const incSort = (arg) => {
  let arr = [...arg];

  for(let i = 1; i < arr.length; i++) {
    let current = arr[i],
      j = i - 1;

    while(j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }


  return arr;
}

const decSort = (arg) => {
  let arr =[...arg];

  for(let i = 1; i < arr.length; i++) {
    let key = arr[i],
      j = i - 1;

    while(j >= 0 && arr[j] < key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
}
  
console.log(incSort(a));
console.log(decSort(a));
