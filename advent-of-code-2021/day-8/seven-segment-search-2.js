/*** SEVENT SEGMENT SEARCH ***/

const fs = require("fs");

const data = fs.readFileSync("input");
//const data = fs.readFileSync("test");

const signals = data.toString().trim().split("\n");

const sortStr = (str) => str.split("").sort().join("");

for(let i = 0, len = signals.length; i < len; i++) {
	let [ten, four] = signals[i].split(" | ");
	
	signals[i] = [
		ten.split(" ").map(sortStr),
		four.split(" ").map(sortStr)
	];
}

const chkChars = (s1, s2) => {
	if(s1.length > s2.length) return chkChars(s2, s1);
	
	for(let i = 0, len = s1.length; i < len; i++) {
		if(!s2.includes(s1[i])) return false;
	}
	
	return true;
};

const decode = (pattern, values) => {
	let nums = [], len_5 = [], len_6 = [], out = "";
	
	for(let i = 0; i < 10; i++) {
		switch(pattern[i].length) {
			case 2:
				nums[1] = pattern[i];
				break;
			case 3:
				nums[7] = pattern[i];
				break;
			case 4:
				nums[4] = pattern[i];
				break;
			case 5:
				len_5.push(pattern[i]);
				break;
			case 6:
				len_6.push(pattern[i]);
				break;
			case 7:
				nums[8] = pattern[i];
				break;
			default:
				break;
		}
	}
	
	// inspecting len_6 array
	for(let i = 0; i < 3; i++) {
		if(!nums[9] && chkChars(nums[4], len_6[i])) {
			nums[9] = len_6[i];
		}else if (!nums[0] && chkChars(nums[1], len_6[i])) {
			nums[0] = len_6[i];
		}else {
			nums[6] = len_6[i];
		}
	}
	
	// inspecting len_5 array
	for(let i = 0; i < 3; i++) {
		if(!nums[3] && chkChars(nums[7], len_5[i])) {
			
			nums[3] = len_5[i];
		}else if (!nums[5] && chkChars(nums[9], len_5[i])) {
			nums[5] = len_5[i];
		}else {
			nums[2] = len_5[i];
		}
	}
	
	for(let i = 0; i < 4; i++) {
		out += String(nums.indexOf(values[i]));
	}
	return out * 1;
};


let out = 0;
for(let i = 0, len = signals.length; i < len; i++) {
	out += decode(...signals[i]);
}
console.log(out);
