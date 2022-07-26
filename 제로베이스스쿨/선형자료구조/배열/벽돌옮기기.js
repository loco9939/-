function bricks(arr) {
  let result = 0;
  let avg = arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
  for (let i = 0; i < arr.length; i++) {
    let move = arr[i] - avg;
    if (move > 0) {
      result += move;
    }
  }
  return result;
}
console.log(bricks([12, 8, 10, 11, 9, 5, 8]));
