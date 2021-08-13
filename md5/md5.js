const bw = require("./bitwise-operations.js");
const T = require("./constant-T.js");

let str = "nafas",
  output = "d606869237f2e1299b5499a27e9f0a00";

const F = (x, y, z) => {
  // (x & y) | ((~x) & z);
  let not_x = bw.bin_not(x)
  return bw.bin_or(bw.bin_and(x, y), bw.bin_and(not_x, z));
}
const G = (x, y, z) => {
  // (x & z) | (y & (~z));
  let not_z = bw.bin_not(z);
  return bw.bin_or(bw.bin_and(x, z), bw.bin_and(y, not_z));
}
const H = (x, y, z) => {
  // x ^ y ^ z;
  return bw.bin_xor(bw.bin_xor(x, y), z);
}
const I = (x, y, z) =>{
  // y ^ (x | (~z));
  let not_z = bw.bin_not(z);
  return bw.bin_xor(y, bw.bin_or(x, not_z));
}

const md5 = (str) => {
  let result = "",  b;

  // converting to binary
  for(let i = 0, len = str.length; i < len; i++) {
    result += str.charCodeAt(i).toString(2).padStart(8, "0");
  }
  b = result.length;

  // check padding
  result += "1";
  while(result.length % 512 !== 448) {
    result += "0";
  }

  //
  for(let i = 0, len = result.length >> 5; i < len; i++) {
    let block = result.slice(i << 5, (i + 1) << 5),
      reverse = "";
    if(parseInt(block, 2) !== 0) {
      for(let n = 3; n >= 0; n--) {
        reverse += block.slice(n << 3, (n + 1) << 3);
      }
      result = result.slice(0, i << 5) + reverse + result.slice((i + 1) << 5);
    }
  }

  // adding the length of result
  b = b.toString(2);
  if(b.length > 64) {
    result += b.slice(-32);
    result += b.slice(-64).slice(0, 32);
  }else{
    b = b.padStart(64, "0");
    result += b.slice(32);
    result += b.slice(0, 32);
  }
  
  // initializing md buffer
  let A = "0x67452301",
    B = "0xefcdab89",
    C = "0x98badcfe",
    D = "0x10325476",
    AA, BB, CC, DD;

  A = parseInt(A, 16).toString(2);
  B = parseInt(B, 16).toString(2);
  C = parseInt(C, 16).toString(2);
  D = parseInt(D, 16).toString(2);

  // calculating hash
  for(let i = 0, len = result.length / 512; i < len; i++ ){
    // copy (A, B, C, D) to new varaibels
    let X = [], block = result.slice(i << 9, (i + 1) << 9);

    AA = A;
    BB = B;
    CC = C;
    DD = D;

    // helper function
    const func = (a, b, c, d, k, s, i, callback) => {
      //console.log({a, b, c, d, k, s, i, callback});
      let buffer = callback(b, c, d);
      buffer = bw.bin_sum_mod_32(a, buffer);
      buffer = bw.bin_sum_mod_32(buffer, X[k]);
      buffer = bw.bin_sum_mod_32(buffer, T[i]);
      buffer = bw.bin_rotate_left(buffer, s);
      buffer = bw.bin_sum_mod_32(b, buffer);

      return buffer;
    };

    // copy 16 word to X-array
    for(let j = 0; j < 512 / 32; j++) {
      let item = block.slice(j * 32, (j + 1) * 32);

      X[j] = item;
    }

    let S = [
      7, 12, 17, 22,
      5, 9, 14, 20,
      4, 11, 16 ,23,
      6, 10, 15, 21
    ], callback, K;

    for(let n = 0; n < 64; n++) {
      let s, k;

      /*** declaring values depend on round number ***/
      if(n === 0) {
        //round 1
        callback = F;
      }else if(n === 16) {
        //round 2
        callback = G;
        K = 1;
      }else if(n === 32) {
        //round 3
        callback = H;
        K = 5;
      }else if(n === 48) {
        //round 4
        callback = I;
        K = 0;
      }
      /*** *** ***/

      if(callback === F) {
        k = n;
        s = S[n % 4]
      }else if(callback === G) {
        k = (K + (n % 16) * 5) % 16;
        s = S[4 + (n % 4)];
      }else if(callback === H) {
        k = (K + (n % 16) * 3) % 16;
        s = S[8 + (n % 4)];
      }else if(callback === I) {
        k = (K + (n % 16) * 7) % 16;
        s = S[12 + (n % 4)];
      }

      AA = func(AA, BB ,CC, DD, k, s, n, callback);
      [AA, BB, CC, DD] = [DD, AA, BB, CC];
    }

    A = bw.bin_sum_mod_32(A, AA);
    B = bw.bin_sum_mod_32(B, BB);
    C = bw.bin_sum_mod_32(C, CC);
    D = bw.bin_sum_mod_32(D, DD);
  }

  A = parseInt(A, 2).toString(16).padStart(8, "0");
  B = parseInt(B, 2).toString(16).padStart(8, "0");
  C = parseInt(C, 2).toString(16).padStart(8, "0");
  D = parseInt(D, 2).toString(16).padStart(8, "0");
  
  result = A + B + C + D;

  for(let i = 0; i < 4; i++) {
    let block = result.slice(i << 3, (i + 1) << 3),
      reverse = "";

      for(let n = 3; n >= 0; n--) {
        reverse += block.slice(n << 1, (n + 1) << 1);
      }

      result = result.slice(0, i << 3) + reverse + result.slice((i + 1) << 3);
  }

  return result;
}

console.log(md5("The quick brown fox jumps over the lazy dog."));
