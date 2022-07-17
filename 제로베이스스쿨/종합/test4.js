let numbers = [1, 4, 2];
let target = 12;

function solution(numbers, target) {
  let res = -1;
  // 경우의 수를 생각해보자
  // target의 최대공약수로 나누고 나누어 떨어질 때마다 횟수를 추가하고 나머지가 0이 될 때까지 나눈다.
  let i = true;
  let count = 0;
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (sum < numbers[i]) {
      sum = numbers[i];
    }
  }
  numbers = numbers.filter((element) => element !== sum);
  console.log(numbers);
  if (target % sum == 0 || target % sum) {
    target = parseInt(target / sum);
  }
  count++;
  sum = numbers[0];
  console.log(target);

  res = count;
  return res;
}
solution(numbers, target);
