// 단어 길이가 짝수면 가운데 글자 2개 반환하고
// 홀수면 1개 반환한다.

let stringA = "abcde";
let stringB = "qwer";

function solution(s) {
  var answer = "";
  if (s.length % 2 === 0) {
    answer = s.slice(s.length / 2 - 1, s.length / 2 + 1);
  } else {
    answer = s.slice(s.length / 2, s.length / 2 + 1);
  }

  return answer;
}
console.log(solution(stringA));
