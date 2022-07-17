// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요.
// 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

let n = 12345;

function solution(n) {
  var answer = [];
  n = String(n);
  var arr = n.split("");
  console.log(n.length)
  // 역순으로
  for (let i = 0; i < n.length; i++){
    let poped = arr.pop();
    answer.push(parseInt(poped));
  }
  return answer;
}

console.log(solution(n));
