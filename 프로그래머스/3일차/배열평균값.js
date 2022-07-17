let arr1 = [1, 2, 3, 4];
let arr2 = [5, 5];

function solution(arr) {
  var answer = 0;
  answer = arr.reduce((pre, cur) => pre + cur, 0) / arr.length;
  return answer;
}

console.log(solution(arr2))