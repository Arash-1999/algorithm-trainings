const fibo = (n) => {
  if((n == 1) || (n == 2)) {
    return n;
  }else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

let total = 0;

for(let i = 1; total < 4000000; i++) {
  if(fibo(i) % 2 == 0){
    console.log(fibo(i));
    total += fibo(i);
  }
}

console.log(total);
