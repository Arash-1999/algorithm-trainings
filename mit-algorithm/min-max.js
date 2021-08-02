const arr = [
  758, 342, 168, 397, 899, 111, 457, 792, 145, 449, 237,
  895, 369, 771, 456, 504, 245, 828, 735, 314, 785, 634,
  565, 495, 831, 492, 701, 581, 170, 121, 723, 335, 225,
  189, 732, 925, 974, 814, 257, 417, 959, 526, 577, 573,
  211, 133, 910, 562, 552, 941, 726, 228, 254, 489, 321,
  618, 701, 920, 404, 644, 140, 501, 911, 724, 774, 735,
  193, 330, 788, 584, 800, 161, 811, 301, 988, 541, 748,
  780, 680, 356, 837, 882, 370, 581, 103, 238, 960, 116,
  551, 587, 145, 515, 662, 537, 362, 678, 220, 477, 852,
  664
];


// find minimum of input array
// run time = n - 1
const minimum = (arr) => {
	let min = arr[0];
	for(let i = 1, len = arr.length; i < len; i++) {
		if(min > arr[i]) min = arr[i];
	};

	return min;
}
// find maximum of input array
// run time = n - 1
const maximum = (arr) => {
	let min = arr[0];
	for(let i = 1, len = arr.length; i < len; i++) {
		if(min < arr[i]) min = arr[i];
	};

	return min;
}

// find minimum and maximum of input array
// run time = 3n/2
const minMax = (arr) => {
	let len = arr.length;
	let min = len % 2 ? arr[0]: Infinity,
		max = len % 2 ? arr[0]: -Infinity;

	for(let i = len % 2 ? 1 : 0; i < len; i += 2) {
		let [tmin, tmax] = 
			arr[i] < arr[i + 1] ? [arr[i], arr[i + 1]] : [arr[i + 1], arr[i]];
		if(tmin < min) min = tmin;
		if(tmax > max) max = tmax;
	};

	return {min, max};
};
