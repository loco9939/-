function answer(x_arr, y_arr) {
  let result = [];

  if (x_arr[0] !== x_arr[1] && x_arr[0] !== x_arr[2]) {
    result.push(x_arr[0]);
  } else if (x_arr[1] !== x_arr[0] && x_arr[1] !== x_arr[2]) {
    result.push(x_arr[1]);
  } else if (x_arr[2] !== x_arr[1] && x_arr[2] !== x_arr[0]) {
    result.push(x_arr[2]);
  }
  if (y_arr[0] !== y_arr[1] && y_arr[0] !== y_arr[2]) {
    result.push(y_arr[0]);
  } else if (y_arr[1] !== y_arr[2] && y_arr[1] !== y_arr[0]) {
    result.push(y_arr[1]);
  } else if (y_arr[2] !== y_arr[1] && y_arr[2] !== y_arr[0]) {
    result.push(y_arr[2]);
  }

  return result;
}

let input = [
  [
    [5, 5, 8],
    [5, 8, 5],
  ],
  [
    [3, 1, 1],
    [2, 1, 2],
  ],
  [
    [7, 7, 3],
    [4, 1, 1],
  ],
];

for (let i = 0; i < input.length; i++) {
  process.stdout.write(`#${i + 1} `);
  console.log(answer(input[i][0], input[i][1]));
}
