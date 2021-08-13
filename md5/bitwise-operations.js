const bin_or = (a, b) => {
  let result = "",
      x1, x2;
  
  // fix length of input numbers
  if(a.length > b.length) {
    x1 = a;
    x2 = b.padStart(a.length, "0");
  } else {
    x1 = b;
    x2 = a.padStart(b.length, "0");    
  }
  
  for(let i = x1.length - 1; i >= 0; i--) {
    let current = (x1[i] === "0" && x2[i] === "0") ? "0" : "1";
    result = current + result;
  }
  
  return result;
}

const bin_and = (a, b) => {
  let result = "",
        x1, x2;

  // fix length of input numbers
  if(a.length > b.length) {
    x1 = a;
    x2 = b.padStart(a.length, "0");
  } else {
    x1 = b;
    x2 = a.padStart(b.length, "0");    
  }
  
  for(let i = x1.length - 1; i >= 0; i--) {
    let current = (x1[i] === "1" && x2[i] === "1") ? "1" : "0";
    result = current + result;
  }
  
  return result;
};

const bin_xor = (a, b) => {
  let result = "",
      x1, x2;
  
  // fix length of input numbers
  if(a.length > b.length) {
    x1 = a;
    x2 = b.padStart(a.length, "0");
  } else {
    x1 = b;
    x2 = a.padStart(b.length, "0");    
  }
  
  for(let i = x1.length - 1; i >= 0; i--) {
    let current = "0";
    if((x1[i] === "0" && x2[i] === "1") || (x1[i] === "1" && x2[i] === "0")) {
      current = "1";
    }
    result = current + result;
  }
  
  return result;
}

const bin_not = (a) => {
  let result = "";
  
  for(let i = 0, len = a.length; i < len; i++) {
    let current = a[i] === "1" ? "0" : "1";
    result += current;
  }
  return result;
}

const bin_rotate_left = (a, s) => {
  return a.slice(s) + a.slice(0, s);
}

const bin_sum = (a, b) => {
  let sum = "",
      carry = 0,
      x1, x2;
  
  // fix length of input numbers
  if(a.length > b.length) {
    x1 = a;
    x2 = b.padStart(a.length, "0");
  } else {
    x1 = b;
    x2 = a.padStart(b.length, "0");    
  }
  
  // add the numbers in x1, x2
  for(let i = x1.length - 1; i >= 0; i--) {
    let buffer = Number(x1[i]) + Number(x2[i]) + carry;
    sum = String(buffer % 2) + sum;
    carry = buffer >> 1;
   }
  
  // process the remainder
  while(carry >= 1) {
    sum = String(carry % 2) + sum;
    carry = carry >> 1;
  }
  
  return sum;
}

const bin_sum_mod_32 = (a, b) => {
  return bin_sum(a, b).slice(-32);
}

module.exports = {
  bin_and,
  bin_not,
  bin_or,
  bin_rotate_left,
  bin_sum,
  bin_sum_mod_32,
  bin_xor
};
