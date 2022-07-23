// 두수 선택하여 최대합이 나올 수 있는 배열 형태로 반환

let a = [-3, 7, -14, 2, -6, 13, -20, -2, -7, 6, -17, -5, 14, -9, 19];
function solution(arr) {
  let result = [];
  result = arr[0] > arr[1] ? [arr[0], arr[1]] : [arr[1], arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result[0]) {
      result[1] = result[0];
      result[0] = arr[i];
    } else if (arr[i] > result[1]) {
      result[1] = arr[i];
    }
  }
  return result;
}

console.log(solution(a));
