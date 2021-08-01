let sumOfSquares = 0,
  squareOfSum = 0;

for(let i = 1; i <= 100; i++) {
  squareOfSum += i;

  sumOfSquares += (i * i);
}

let diff = sumOfSquares - Math.pow(squareOfSum, 2);

diff = diff < 0 ? diff * -1 : diff;


console.log(diff);
