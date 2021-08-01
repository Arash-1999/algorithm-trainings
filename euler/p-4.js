// check a number is palindrome or not
const palindrome = (n) => {
  let str = String(n);

  for(let i = 0; i < str.length / 2; i++){
    if(str[i] !== str[str.length - i - 1]) return 0;
  }
  
  return 1;
}

// an array for storing palindromes
let allPalindrome = [];
// find all palindrome of product of two 3-digit numbers
for(let i = 999; i > 99; i--) {
  for(let j = 999; j > 99; j--) {
    if(palindrome(i * j)) {
      allPalindrome.push(i * j);
    }
  }
}

// find maximum of allPalindromes array
let max = 0;
for(let i = 0; i < allPalindrome.length; i++) {
  if(allPalindrome[i] > max) max = allPalindrome[i];
}
// print answer
console.log(max);
