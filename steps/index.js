// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/* function steps(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';
        for (let column = 0; column < n; column++) {
            if(column <= row) {
                stair += '#'
            } else {
                stair += ''
            }
        }
        console.log(stair)
    }
}
 */

// Quadratic Time Complexity, O(n^2) as we used two nested loops
// Linear Space Complexity,  O(n) as we create n variables storing n values

function steps(n, row = 0, stair = '') {
    if (n === row) {
        return;
    }

    if (n === stair.length) {
        console.log(stair);
        steps(n, row + 1); 
        return;
    }

    const add = stair.length <= row ? '#' : ' ';

    steps(n, row, stair + add);
}

// Constant Time Complexity
// Linear Space Complexity, O(n) as we create n variable storing n values 

console.log(steps(4))
module.exports = steps;
