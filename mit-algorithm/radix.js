const arr = [
  { date: [ 62, 40, 42 ] },
  { date: [ 62, 56, 33 ] },
  { date: [ 21, 35, 47 ] },
  { date: [ 20, 30, 25 ] },
  { date: [ 22, 45, 44 ] },
  { date: [ 27, 25, 54 ] },
  { date: [ 33, 54, 43 ] },
  { date: [ 34, 54, 23 ] },
  { date: [ 68, 28, 34 ] },
  { date: [ 34, 30, 60 ] },
  { date: [ 22, 49, 43 ] },
  { date: [ 32, 47, 35 ] },
  { date: [ 22, 34, 23 ] },
  { date: [ 62, 28, 64 ] },
  { date: [ 47, 34, 29 ] },
  { date: [ 21, 60, 23 ] },
  { date: [ 22, 65, 21 ] },
  { date: [ 30, 41, 59 ] },
  { date: [ 67, 24, 33 ] },
  { date: [ 50, 55, 30 ] }
];

// creating random array
//for(let i = 0; i < 20; i++) {
//  let item = {date: []};
//  for(let j = 0; j < 3; j++) {
//    item.date[j] = Math.floor(Math.random() * 50) + 20;
//  };
//
//  arr[i] = item;
//};

const insertionSort = (arr) => {
  for(let i = 1, len = arr.length; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    while(j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = key;
  }
};

const stableSort = (arr, n) => {
  for(let i = 1, len = arr.length; i < len; i++) {
    let key = arr[i];
    let j = i - 1;

    let item = arr[j];

    while(j >= 0 && item.date[n] > key.date[n]) {
      arr[j + 1] = arr[j];
      j--;
      item = arr[j];
    }

    arr[j + 1] = key;
  }
};

const radix = (arr) => {
  let result = [...arr],
    eg = arr[0];

  for(let i = eg.date.length - 1; i >= 0; i--) {
    stableSort(result, i);
    console.log(result);
  }
  
  return result
};


console.log(radix(arr));
