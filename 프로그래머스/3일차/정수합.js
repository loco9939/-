// 정수들의 절댓값을 차레대로 담은 배열 absolutes
// 정수들의 부호를 차례대로 담은 boolean 배열 signs

// 실제 정수들의 합을 구하여 return 하라
let ab1 = [4, 7, 12];
let si1 = [true, false, true];

let ab2 = [4, 7, 12];
let si2 = [false, false, true];

function solution(absolutes, signs) {
  var answer = 123456789;
  for (let i = 0; i < signs.length;i++) {
    if (!signs[i]) {
      absolutes[i] *= (-1)
    }
    answer = absolutes.reduce((pre,cur)=>pre+cur,0);
  }
  return answer;
}

console.log(solution(ab1,si1))