// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/* function anagrams(stringA, stringB) {
    function formatStr(str) {
        return str.toLowerCase().replace(/[^\w]/g, '').split('').sort().join('')
    }

    const strA = formatStr(stringA)
    const strB = formatStr(stringB)

    if (strA === strB) {
        return true
    }
    return false

} */

// Log Linear Time Complexity, O(n log(n)) as we loop and sort
// Linear Space Complexity, O(n) as we create variables and store n values in them

function anagrams(stringA, stringB) {

    function handleDict(str) {
        const dict = {}
        for (let letter of str.replace(/[^\w]/g, '').toLowerCase()) {
            dict[letter] = dict[letter] + 1 || 1;
        }
        return dict
    }

    const dictA = handleDict(stringA)
    const dictB = handleDict(stringB)

    for (let char in dictA) {
        if(dictA[char] !== dictB[char]) {
            return false
        }
    }

    return true
}

// Linear Time Complexity, O(n), as we loop though n values
// Linear Space Complexity, O(n), as we create variables storing n values



console.log(anagrams('Hello', 'HellA'))

module.exports = anagrams;
