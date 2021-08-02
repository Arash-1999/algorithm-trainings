const arr = [33, 38, 54, 55, 42, 71, 89, 53, 75, 12, 13, 18, 99, 98, 63, 79, 88, 14, 52, 89];

const bubbleSort = (arr) => {
  // declare result array
  let result = [];
  // copy input array to result
  for(let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
  }

  // sort copy of input array
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = arr.length; j > i; j--) {
      let target = result[i],
        current = result[j];
      if(target > current) {
        result[i] = current;
        result[j] = target;
      };
    };
  };

  return result;
};


console.log(bubbleSort(arr));
