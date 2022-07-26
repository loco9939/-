let input = [
  // TC: 1
  3,
  // TC: 2
  5,
  // TC: 3
  7,
];
function answer(height) {
  let str = "\n";

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height - i - 1; j++) {
      str += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      str += "*";
    }

    str += "\n";
  }
  return str;
}
console.log(answer(5));
