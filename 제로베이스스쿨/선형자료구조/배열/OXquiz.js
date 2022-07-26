function solution(arr) {
  let sum = 0;
  let score = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      sum += ++score;
    } else {
      // 0을 만나는 경우 score 다시 초기화 해줘야 한다.
      score = 0;
    }
  }
  return sum;
}
console.log(solution([1, 0, 1, 1, 1, 0, 1, 1, 0, 0]));
