function answer(user) {
  let permit;
  if (user.height < 150) {
    permit = false;
  } else {
    permit = true;
  }
  return permit;
}

let input = [
  { name: "John", age: 27, height: 181 },
  { name: "alice", age: 12, height: 148 },
  { name: "bob", age: 14, height: 156 },
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
