// 1부터 숫자 n 사이의 소수 개수를 반환하는 함수 만들어보세요
// 소수는 1과 자기 자신으로만 나누어지는 수이며
// 1은 소수가 아니다.
let n = 10;
let b = 5;

function solution(n) {
  var answer = 0;
  let arr = [0];
  for (let i = 3; i < n + 1; i++) {
    arr.push(i);
  }
  function isPrimeNum(a) {
    if (n == 1) return false;
    for (let i = 2; i < a; i++) {}
  }
  answer = arr.filter();
  console.log(arr);
  return answer;
}

console.log(solution(n));
