// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/* function vowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0
        for (let char of str.toLowerCase()) {
           if(vowels.includes(char)) {
            counter ++
           }
        }
    return counter
} */

// Quadratic Time Complexity, O(n^2) we have two nested for loops
// Linear Space Complexity, O(n) we create two variables, one with a O(1) and the other with O(n)

/* function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  console.log(matches)
  return matches ? matches.length : 0;
} */

// Logarithmic Time Complexity, O(n log(n)) as we loop and search
// Linear Space Complexity, O(n) as we create a variable storing n values

console.log(vowels('Why do you ask?'));

module.exports = vowels;
