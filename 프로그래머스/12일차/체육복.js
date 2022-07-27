let input = [
  // TC1
  [5, [1, 2], [2, 3]],
  [5, [2, 3], [1, 2]],
  [5, [4, 2], [3, 5]],
  [5, [2, 3, 4], [1, 2, 3]],
];

function solution(n, lost, reserve) {
  let answer = 0;
  for (let i = 0; i < lost.length; i++) {
    for (let j = 0; j < reserve.length; j++) {
      if (lost[i] === reserve[j]) {
        lost.splice(i, 1);
        reserve.splice(j, 1);
      }
    }
  }
  answer = n - lost.length;

  for (let i = 0; i < lost.length; i++) {
    if (reserve.indexOf(lost[i] - 1) != -1) {
      answer += 1;
      reserve.splice(reserve.indexOf(lost[i] - 1), 1);
    } else if (reserve.indexOf(lost[i] + 1) != -1) {
      answer += 1;
      reserve.splice(reserve.indexOf(lost[i] + 1), 1);
    }
  }
  return answer;
}
for (let i = 0; i < input.length; i++) {
  console.log(solution(input[i][0], input[i][1], input[i][2]));
}
