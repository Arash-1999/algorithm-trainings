let n = 2;

let result = [],
  value;

while( true ) {
  value = 0;
  result = [];

  for(let i = 2; i <= 20; i++) {
    result.push(n % i);
  }

  value = result.reduce((a, b) => a + b, 0);
  
  if(value == 0) break;
  n += 2;
}
console.log(n);
