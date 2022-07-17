function answer(x,y) {
  let result = [];
  a = x < y ? x : y;
  b = x < y ? y : x;
for (let i = a; a < b+1; a++) {
  result.push(a)
}
  return result;
}

let input = [
  [3,7],
  [8,3],
  [12,10]
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i+1}`);
  console.log(answer(input[i][0], input[i][1]));
}