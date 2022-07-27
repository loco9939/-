function solution(M, N) {
  const answer = [];
  // 1. 각 자릿수 인덱스 0으로 초기화
  for (let i = 0; i < 10; i++) {
    answer[i] = 0;
  }

  // 2. 문자 반복문 돌면서 나누기를 통해 자릿수 추가해주자.
  let num;
  for (let i = M; i <= N; i++) {
    num = i;
    while (num != 0) {
      answer[num % 10]++;
      num /= 10;
      num = parseInt(num);
    }
  }
  return answer;
}

console.log(solution(4159, 9182));
