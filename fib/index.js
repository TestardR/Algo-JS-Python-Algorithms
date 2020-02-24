// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     const results = [0, 1]
//     for (let i = 2; i <= n; i++) {
//         const a = results[i - 1]
//         const b = results[i - 2]
//         results[i] = a + b
//     }
//     return results
// }

// Linear Time Complexity

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

// Exponential Time Complexity

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(null, args);
    cache[args] = result;
    
    return result;
  };
}

const fibonnaci = memoize(fib);

console.log(fibonnaci(6));
module.exports = fib;
