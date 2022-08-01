const lottos = [
  [44, 1, 0, 0, 31, 25],
  [0, 0, 0, 0, 0, 0],
  [45, 4, 35, 20, 3, 9],
];
const win_nums = [
  [31, 10, 45, 1, 6, 19],
  [38, 19, 20, 40, 15, 25],
  [20, 9, 3, 45, 4, 35],
];

function solution(lottos, win_nums) {
  let answer = [];
  const win = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5, 1: 6, 0: 6 };
  const count = [0, 0];
  
  // 1. 중복 요소 제거한다.
  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      if (lottos[i] === win_nums[j]) {
        // lottos.splice(i, 1);
        win_nums.splice(j, 1);
        count[0] += 1;
        count[1] += 1;
      }
    }
  }
  // 2. 0의 갯수가 win_nums 길이보다 작거나 같으면 0 갯수만큼 count[0] 에 더해줘라
  const map = {};
  for (const el of lottos) {
    if (!map[el]) {
      map[el] = 1;
    } else {
      map[el] += 1;
    }
  }
  let zeroCount = map[0];
  if (zeroCount <= win_nums.length) {
    count[0] += zeroCount;
  }

  answer[0] = win[count[0]];
  answer[1] = win[count[1]];

  return answer;
}
console.log(solution(lottos[2], win_nums[2]));
