function answer(user) {
  let reverse = [];
  for (let i = 0; i < user.length; i++) {
    reverse.unshift(user[i]);
  }
  return reverse;
}

let input = [
  [1, 2, 3, 4],
  [-1, 6, "hello", -15],
  ["apple", "banana", "mango"],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i]));
}
