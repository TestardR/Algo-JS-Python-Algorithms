// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const midPoint = Math.floor((n * 2 - 1) / 2);

  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n * 2 - 1; column++) {
      if (midPoint - row <= column && midPoint + row >= column) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}

//  Quadratic Time Complexity as we go through two nested loops
//  Linear Space Complexity as we create one variable storing n values

// function pyramid(n, row = 0, stair = '') {
//   const midpoint = Math.floor((n * 2 - 1) / 2);

//   if (row === n) {
//     return;
//   }

//   if (stair.length === n * 2 - 1) {
//     console.log(stair);
//     return pyramid(n, row + 1);
//   }

//   let add =
//     midpoint - row <= stair.length && midpoint + row >= stair.length
//       ? '#'
//       : ' ';

//   pyramid(n, row, stair + add);
// }

// Constant time complexity 0(1)
// Linear Space Complexity 0(n) as we create one variable storing n values

pyramid(3);

module.exports = pyramid;
