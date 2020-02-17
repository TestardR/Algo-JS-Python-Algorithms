// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const reversedN = parseInt(n
    .toString()
    .split('')
    .reverse()
    .join(''))

    return reversedN * Math.sign(n)
}

console.log(reverseInt(-500))

// Log Linear Time Complexity O(n log(n)) as we loop and sort n values
// Linear Time complexity O(n) as we created a variable storing n values


module.exports = reverseInt;
