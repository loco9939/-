// 체스게임을 위해 부족하거나 많은 기물의 개수를 계산하여 반환
// king : 1
// queen : 1
// rooks : 2
// bishops : 2
// knights : 2
//  pawns : 8

let a = [0, 1, 2, 2, 2, 7];
let b = [2, 1, 2, 1, 2, 1];
let c = [0, 1, 1, 5, 3, 6];

function solution(arr) {
  let result = [];
  let chess = [1, 1, 2, 2, 2, 8];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    result[count++] = chess[i] - arr[i];
  }

  return result;
}

console.log(solution(c));
