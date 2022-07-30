// 총 N마리 중 N/2 마리를 가져갈 수 있다.
// 폰켓몬 종류에 따라 번호가 있다.

// [3번, 1번, 2번, 3번]
// 4마리에 폰켓몬 중 2마리 고르는 경우의수 6가지다.
// 위 예시에서 가질수 있는 폰켓몬 종류는 최대 2가지

// 최대한 많은 종류의 포켓몬을 가져가면서 가져갈 수 있는 수는 N/2이다.

// nums 배열은 짝수

function solution(nums) {
  let answer = 0;
  // 1. 포켓몬 번호당 갯수를 담을 자료
  const map = {};
  const count = nums.length / 2;
  let keys = 0;
  for (let i of nums) {
    if (!map[i]) {
      map[i] = 1;
    } else {
      map[i]++;
    }
  }
  // 2. map의 키가 곧 폰켓몬 종류이니 종류를 세준다.
  for (let key in map) {
    keys++;
  }

  // 3. 내가 고를 수 있는 폰켓몬 수와 폰켓몬 종류중 작은 것을 출력
  return Math.min(keys, count);
}
console.log(solution([3, 1, 2, 3]));
