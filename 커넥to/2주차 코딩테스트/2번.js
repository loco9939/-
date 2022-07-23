// 젤리는 a,b,c 3종류가 일렬로 있다.
// 이중 일부를 통째로 구매

// 통째 구매할 때 a젤리가 b,c 젤리보다 많이 들었으면 좋겠다.
// 구매시 가장 최소로 구매한다.

// 전체 젤리 갯수는 최소로 구매하면서 a 젤리는 가장많이 구매할 수 있는 갯수 반환

// ex) cacabccc 이렇게 있으면 aca가 가장 적합하니 3개를 반환
let jelly = "caabaaccac";

function solution(jelly) {
  let answer = 0;
  // 우선순위가 a를 제일 많이 가져가는 것이다. 그 후 최소 개수를 고려하자
  // a의 처음인덱스 부터 a의 마지막 인덱스까지 잘라서 갯수 구하자.
  let firstIndex = jelly.indexOf("a");
  let lastIndex = jelly.lastIndexOf("a");
  let buyJelly = jelly.slice(firstIndex, lastIndex + 1);
  
  
  answer = buyJelly.length;

  return answer;
}
console.log(solution(jelly));
