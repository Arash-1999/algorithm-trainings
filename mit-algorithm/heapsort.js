const arr = [33, 38, 54, 55, 42, 71, 89, 53, 75, 12, 13, 18, 99, 98, 63, 79, 88, 14, 52, 89];
arr.heapSize = arr.length;

const eg = [16, 4, 10, 14, 7, 9, 3, 2, 8, 1];
eg.heapSize = eg.length;
const eg2 = [4, 1, 3, 2, 16, 9, 10, 14, 8, 7];
eg2.heapSize = eg2.length;


const maxHeapify = (arr, i) => {
  let l = 2 * i + 1,
    r = 2 * i + 2;
  let largest;

  if(l < arr.heapSize && arr[l] > arr[i]) {
    largest = l;
  }else {
    largest = i;
  };
  if(r < arr.heapSize && arr[r] > arr[largest]) {
    largest = r;
  }
  if(largest !== i) {
    let x = arr[largest];
    arr[largest] = arr[i];
    arr[i] = x;

    return maxHeapify(arr, largest);
  }
  
  return arr;
};

const buildMaxHeap = (arr) => {
  let idx = Math.ceil(arr.length / 2 + 1) - 1;
  for(let i = idx - 1; i >= 0; i--) {
    maxHeapify(arr, i);
  };
  return arr;
};

const heapSort = (arr) => {
  buildMaxHeap(arr);

  for(let i = arr.length - 1; i > 0; i--) {
    let x = arr[i];
    arr[i] = arr[0];
    arr[0] = x;

    arr.heapSize--;

    maxHeapify(arr,0);
  }

  return arr;
};

console.log(heapSort(arr));
