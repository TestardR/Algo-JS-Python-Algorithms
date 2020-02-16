// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {

//     if(typeof str !== "string") {
//         return
//     }

//     const arr = str.split('') 
//     let acc = ''
    
//     for(let i = 0; i < arr.length; i++) {
    
//         acc = arr[i] + acc
//     }

//     return acc
// }

// Log Linear time complexity O(n log(n))
// Linear space complexity O(n)

function reverse(str) {

    return [...str].reverse().join('')
    return str.split('').reverse().join('')

}

// Log Linear time complexity O(n log(n))
// Constant space complexity O(1)

 

module.exports = reverse;
