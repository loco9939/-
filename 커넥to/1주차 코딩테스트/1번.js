// N명의 참가자
// 2개의 전장
// 토너먼트 방식
// 전투력 높은 사람 승
// 같은 전장에서 같은 전투력 있는  사람 없다
// 우승 가능성 선수에게 1 아닌사람은 0 으로 표기하여 반환하라

let n = 4;
let stat1 = [1, 2, 3, 4];
let stat2 = [1, 2, 3, 4];

function solution(n, stat1, stat2) {
  var answer = "";
  // 배열 최대값인 선수는 1 Math.max(...stat1)로 숫자 구함
  const winnerNum1 = Math.max(...stat1);
  const winnerNum2 = Math.max(...stat2);
  // 구한 숫자 인덱스 찾는다
  const winnerIdx1 = stat1.indexOf(winnerNum1);
  const winnerIdx2 = stat1.indexOf(winnerNum2);

  // 문자열로 만든다.
  const str1 = stat1.join();
  const str2 = stat2.join();

  // 그 인덱스를 제외한 나머지는 0으로 표기
  const new_str1 = "0".repeat(winnerIdx1) + 1;
  const new_str2 = "0".repeat(winnerIdx2) + 1;

  answer = new_str1;
  return answer;
}
console.log(solution(n, stat1, stat2));
