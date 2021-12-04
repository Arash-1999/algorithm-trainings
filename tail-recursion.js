#!/usr/bin/node

/* TAIL RECURSIONS */
/* *** *** **** 
  tail recursion is a trick to make recursive algorithms more effient
  in this trick you should make recursive call the last thing you've done.
*** *** **** */

// factorial
const fac = (n) => fac_go(n, 1);

const fac_go = (a, acc) => {
  if (a === 0) return acc;

  return go(a - 1, acc * a);
};

// fibonacci
const fib = (n) => fib_go(n, 0, 1);

const fib_go = (n, a, b) => {
  if (n === 0) return a;
  if (n === 1) return b;

  return fib_go(n - 1, b, b + a);
};

console.log(fib(6));
