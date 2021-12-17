/*** 3. LONGEST SUBSTRING WITHOUT REPEATING CHARACTERS ***/
/*** *** *** *** *** *** *** *** *** *** *** ***
Given a string s, find the length of the longest substring without repeating characters.
*** *** *** *** *** *** *** *** *** *** *** ***/

/**
 * @param {string} s
 * @return {number}
 */

/*** EXAMPLES ***/
const str1 = "abcabcbb"; // 3
const str2 = "bbbbb"; // 1
const str3 = " "; // 1

// main algorithm
const lengthOfLongestSubstring = (s) => {
  let out = 0;

  for (let i = 0, len = s.length; len - i > out && i < len; i++) {
    console.log(i);
    let tmp = 0,
      str = "",
      j = i;

    while (j < len && !str.includes(s[j])) {
      str += s[j];
      tmp++;
      j++;
    }

    out = out < tmp ? tmp : out;
  }

  return out;
};

console.log(lengthOfLongestSubstring(str1));
