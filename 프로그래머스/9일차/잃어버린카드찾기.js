// 등차수열문제
function arithmetic(a, b, c) {
  let number = 0;
  num = [a, b, c];

  [a, b, c] = num.sort((x, y) => x - y);

  let gap = b - a > c - b ? c - b : b - a;

  if (b - a > c - b) {
    number = a + gap;
  } else {
    number = b + gap;
  }
  return number;
}

// console.log(arithmetic(1, 7, 10));
// console.log(arithmetic(3, 8, 18));
console.log(arithmetic(11, 2, 5));
