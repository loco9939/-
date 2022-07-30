// w를 uu로 보내고 m을 nn으로 보내는 버그가 있다.
// uu와 nn이 있으면 버그 잡을 경우와 그렇지 않은 경우의 수 반환
let message = "bannauuaw";
function solution(message) {
  var answer = 0;
  // 1. nn이나 uu가 있는지 확인한다.
  message = message.replaceAll("nn", "-m-");
  message = message.replaceAll("uu", "-w-");
  message = message.split("-");
  message = message.filter((el) => el === "m" || el === "w");
  let len = message.length;

  let arr = new Array(len * 2).fill(1,0,len*2);
  

  // 2. 총 길이의 수의 2배 중에 길이만큼 순열 구하는 공식
  const getPermutation = function (arr, num) {
    const result = [];
    if (num === 1) return arr.map((v) => [v]);

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];

      const permutation = getPermutation(rest, num - 1);

      const attached = permutation.map((v) => [fixed, ...v]);

      result.push(...attached);
    });
    return result.length;
  };
  answer = getPermutation(arr, len);

  return answer;
}
console.log(solution(message));
