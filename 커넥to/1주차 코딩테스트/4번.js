// 기존 배열에서 숫자를 하나씩 바꿔서 아름다운 배열 만들기
// 아름다운 배열이 되는 최소한의 작업수 반환
let arr = [1, 1, 2, 2];
function solution(beautiful) {
  var answer = 0;
  // 요소 2개 이상 같은게 있으면 나머지 요소를 일치 시키는 방법
  let count = 0;
  // 배열 요소를 바꾼 다고 하니 splice 함수를 사용할 것 같다
  beautiful.splice(2, 1, 1);
  count = count + 1;
  beautiful.splice(3, 1, 1);
  count = count + 1;
  answer = count
  console.log(beautiful);
  console.log(count);
  // 요소 같은게 없고
  return answer;
}
solution(arr);
