// 무언가 쌍을 이루는 구조라면 map 자료구조 생각해보기

function solution(arr, num) {
  const index = [];
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    let j = num - arr[i];
    if (map[j] != undefined) {
      return [map[j], i]
    }
    map[arr[i]] = i;
  }
}
console.log(solution([3, 2, 4], 6));
