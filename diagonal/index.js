function diagonal(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let column = 0; column < n; column++) {
      if (n - row - 1 === column) {
        stair += '#';
      } else {
        stair += '0';
      }
    }
    console.log(stair);
  }
}

function diagonal(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    diagonal(n, row + 1);
    return;
  }

  const add = n - row - 1 === stair.length ? '#' : '0';

  diagonal(n, row, stair + add);
}

diagonal(5);
