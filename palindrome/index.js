// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/* function palindrome(str) {
  if (typeof str !== 'string') {
    return;
  }

  for (let i = 0; i < str.length; i++) {
    for (let y = str.length - 1; y >= 0; y--) {
      if (str[i] === str[y]) {
        return true;
      }
      return false;
    }
  }

} */

// Quadratric time complexity O(n^2) Due to the nested for loops
// Constant space complexity

/* function palindrome(str) {
  if (typeof str !== 'string') {
    return;
  }

  const reversedStr = [...str].reverse().join('')

  if(str === reversedStr) {
      return true
  }

  return false
} */

// Log linear time complexity O(n log(n))
// Linear Space complexity O(n)

// function palindrome(str) {
//   return [...str].every((char, i) => {
//     return char === str[str.length - 1 - i];
//   });
// }

console.log(palindrome('abba'));

module.exports = palindrome;
