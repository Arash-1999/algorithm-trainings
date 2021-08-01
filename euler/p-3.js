const primeFactors = (n) => {
  // prime factors
  let result = [];

  // onle even prime number
  if(n % 2 == 0) {
    while ( n % 2 == 0) {
      result.push(2);
      n = n / 2;
    }
  }

  // find odd prime factors
  for(let i = 3; i <= Math.sqrt(n); i += 2){
    while(n % i == 0) {
      result.push(i);
      n = n / i;
    }
  }
  if(n > 1) {
    result.push(n);
  }

  // return prime factors
  return result;
}


console.log(primeFactors(600851475143));
