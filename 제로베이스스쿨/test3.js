let N = 4;
let M = 5;
let amount = [7, 10, 4, 5];
let value = [5, 4, 3, 1];
let stomach = [4, 6, 2, 5, 3];

function solution(N, M, amount, value, stomach) {
  let items = [];
  let result = 0;
  // 가격이 비싼 고기부터 다 먹어치워야한다.
  let sum_sto = 0;
  for (let i = 0; i < stomach.length; i++) {
    sum_sto += stomach[i];
  }
  for (let j = 0; j < amount.length; j++) {
    if (sum_sto > amount[j]) {
      result += value[j] * amount[j];
      sum_sto -= amount[j];
    } else {
      result += value[j] * sum_sto;
      sum_sto -= sum_sto;
    }
  }
  return result;
}

console.log(solution(N, M, amount, value, stomach));
