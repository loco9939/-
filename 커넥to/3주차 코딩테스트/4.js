let matrix = [
  [false, false, true],
  [false, false, false],
  [true, false, false],
];

function solution(matrix) {
  var answer = true;
  let n = matrix.length;
  let j = n - 1;
  if (matrix[j][0] == true && matrix[0][j] == false) {
    return false;
  } else if (matrix[j][0] == false && matrix[0][j] == true) {
    return false;
  } else if (matrix[j][0] == false && matrix[0][j] == false) {
    return false;
  }

  return answer;
}
console.log(solution(matrix));
