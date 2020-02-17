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
    if (typeof n !== "number") {
        return
    }

    const nArray = n.toString().split('')

    if (Math.sign(n) === -1) {
        nArray.shift()
        return (parseInt(nArray
            .reverse().join(''))) * -1
    } 

    return parseInt(nArray.reverse().join(''))
}

console.log(reverseInt(-500))

// Log Linear Time Complexity O(n log(n)) as we loop and sort n values
// Linear Time complexity O(n) as we created a variable storing n values


module.exports = reverseInt;
