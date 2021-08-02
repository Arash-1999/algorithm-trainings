const arr = [
  747, 470, 969, 642, 881, 954, 225, 330, 341, 800, 325,
  645, 294, 349, 148, 278, 515, 810, 932, 840, 152, 963,
  299, 904, 343, 241, 602, 419, 701, 305, 745, 752, 489,
  585, 774, 944, 601, 517, 913, 989, 142, 675, 383, 762,
  586, 571, 976, 571, 978, 911, 790, 633, 415, 407, 948,
  975, 231, 505, 440, 466, 565, 978, 778, 601, 959, 742,
  955, 408, 673, 123, 494, 151, 509, 389, 482, 437, 655,
  506, 128, 524, 208, 766, 629, 217, 392, 623, 173, 454,
  468, 145, 573, 259, 432, 910, 897, 973, 749, 917, 902,
  744
];


const partition = (arr, p, r) => {
	let key = arr[r];
	let i = p - 1;

	for(let j = p; j < r; j++) {
		if(arr[j] < key) {
			i++;
			let current = arr[j];
			arr[j] = arr[i];
			arr[i] = current;
		};
	};
	arr[r] = arr[i + 1];
	arr[i + 1] = key;

	return i + 1;
};

const select = (arr, p, r, i) => {
	let tarr = [...arr];
	if(p === r) return tarr[0];

	let q = partition(tarr, p, r);

	if(q === i) return tarr[q];
	if(q < i) {
		return select(tarr, q + 1, r, i);
	}else {
		return select(tarr, p, q - 1, i);
	};
};
