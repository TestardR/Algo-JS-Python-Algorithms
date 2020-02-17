// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const dict = {}
    let max = 0
    let maxChar = ''

    for (let l of str) {
        if (dict[l]) {
            dict[l] ++
        } else {
            dict[l] = 1
        }
    }

    for (let char in dict) {
        if (dict[char] > max) {
            maxChar = char
            max = dict[char]
        }
    }

    return [maxChar, max]

}

console.log(maxChar(("abccccccd1111111111")))

module.exports = maxChar;
