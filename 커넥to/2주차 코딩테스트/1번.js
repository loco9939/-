// 티켓 예매 소요 시간
// arr = 예메 줄을 선 그룹 , 각 요소는 그룹의 인원 수
// 티켓 예매 시간 t초, 대표는 t*2초, 그룹원은 t초

// 모든 배열 요소에 대표가 1명씩 있으니 t*2 고려
// 대표를 제외한 그룹원의 수만큼 배열 남은 체로 요소의 수만큼 t 고려

// 배열의 각 요소의 시간을 모두 더한 값을 반환
const arr = [3, 2, 1, 5];

function solution(arr, t) {
  let answer = 0;
  let leaderTimes = arr.length * 2 * t;
  let group_arr = arr.map((v) => v-1);
  for (const i of group_arr) {
    answer += i * t
  }
  answer += leaderTimes
  
  return answer;
}

console.log(solution(arr,2))