function answer(s, e) {
  let sequence = [];
  let sum = 0;
  let i = 0;
  sequence.push(s);
  sequence.push(e);

  while (1) {
    sum = sequence[i] - sequence[i + 1];
    sequence.push(sum);
    i++;
    if (sum > sequence[i]) break;
  }
  return sequence;
}

let input = [
  [9, 3, 6],
  [6, 3],
  [13, 7],
];
for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1}`);
  console.log(answer(input[i][0], input[i][1]));
}
