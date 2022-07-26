// 9명이 서로 난장이라고 우긴다.
// 7명 난장이의 숫자 합은 100이다.
// 7명 난장이의 배열을 반환하라.

const arr1 = [1, 5, 6, 7, 10, 12, 19, 29, 33];
const arr2 = [25, 23, 11, 2, 18, 3, 28, 6, 37];
const arr3 = [3, 37, 5, 36, 6, 22, 19, 2, 28];

function getCombination(input, num) {
  let result = [];
  if (num === 1) return input.map((v) => [v]);

  input.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);

    const combination = getCombination(rest, num - 1);

    const attatched = combination.map((v) => [fixed, ...v]);

    result.push(...attatched);
  });
  return result;
}

console.log(
  getCombination(arr1, 7).find(
    (v) => 100 === v.reduce((pre, cur) => pre + cur),
    0
  )
);
