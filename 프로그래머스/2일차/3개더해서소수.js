// 3개 숫자더해서 소수가 되는 경우의 수 구하기
const myarr = [1, 2, 3, 4,5,6];
const getCombination = (arr, num) => {
  const result = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);

    const combinations = getCombination(rest, num - 1);

    const attached = combinations.map((v) => [fixed, ...v]);

    result.push(...attached);
  });

  return result;
};
const isPrime = (num) => {
  if(!num || num === 1) return false;
  for (let i = 2; i <= Math.sqrt(num) ; i++) {
      if (num % i === 0) return false;
  }

  return true;
}
const reducer = (pre, cur) => pre + cur;
function solution(nums, select) {
  let answer = 0;
  let result = getCombination(nums, select);

  for (let i = 0; i < result.length; i++) {
    let num = result[i].reduce(reducer,0);
    if (isPrime(num) === true) {
      answer += 1;
    }
  }
  return answer;
}

console.log(solution(myarr, 3));
