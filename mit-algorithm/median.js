const xarr = [
  24, 23, 21, 24, 27, 20,
  29, 18, 28, 24, 20, 25,
  21, 13, 23
];
const yarr = [
  27, 23, 18, 23, 29, 17,
  20, 20, 21, 15, 19, 20,
  20, 29, 20
];

for(let i = 0; i < 75; i++) {
	xarr[i] = Math.floor(Math.random() * 100) + 10;
};
for(let i = 0; i < 75; i++) {
	yarr[i] = Math.floor(Math.random() * 100) + 50;
};

xarr.sort((a, b) => a - b);
yarr.sort((a, b) => a - b);

const median = (x, y) => {
	let arr = [],
		i = 0, j = 0, k = 0,
		n = x.length;

	while(k < n) {
		if(x[i] <= y[j]) {
			arr[k] = x[i];
			i++
		}else {
			arr[k] = y[j];
			j++
		}
		k++;
	}
	
	return arr[k - 1];
};

console.log("founded by my algorithm: " + median(xarr, yarr));

let arr = [...xarr, ...yarr];
arr.sort((a, b) => a - b);
console.log("founded by combining two array: " + arr[arr.length - 1 >> 1]);
