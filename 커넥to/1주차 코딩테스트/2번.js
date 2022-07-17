// 최대 3개의 공연참가 티켓
// 3가지 공연 참여 경우의 수
// 아래 두가지 조건 중 하나는 만족해야한다

// 1. 같은 가수가 여러 공연 해도 그 중 1회만 참가

// 2. 같은 시간에 진행하더라도 가수가 다르면 두가지 모두 참여 가능
const schedule = [
  [2, 4],
  [3, 4],
  
  [1, 3],
];
function solution(schedule) {
  var answer = 0;
  // 자료구조를 만들자
  const singers = {};
  const time = {};

  for (const element of schedule) {
    singers[element[0]] = element[0];
    time[element[1]] = element[1];
  }
  // 만약 singer가 빈값이 없으면 경우의 수 하나 추가
  for (const singer in singers){
    if (!singer) {
      return answer
    } else {
      answer += 1;
    }
  }
  
  console.log(answer)
  

  return answer;
}
solution(schedule);
