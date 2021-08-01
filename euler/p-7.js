const checkPrime = (n) => {
  if(n < 2) return 0;
  if(n % 2 == 0) {
    return n == 2 ? 1 : 0;
  }else {
    let arr = [];
    for(let i = 3; i <= Math.sqrt(n); i += 2) {
      arr.push(n % i);
    }
    if(arr.indexOf(0) == -1) {
      return 1;
    }
  }
  return 0;
};

let n = 0;
let num = 1;

while(n < 10001) {
  if(checkPrime(num)) {
    n++;
  }
  num++;
}

console.log(num - 1);
