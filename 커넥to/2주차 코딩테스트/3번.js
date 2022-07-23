// 서울에서 제주 거리 : L
// 현재 배치된 카메라 위치가 배열로 주어짐
// 줄일 카메라 갯수 : K

let L = 10;
let K = 2;
let cameras = [0, 3, 4, 8];
let limits = [5, 8, 3, 6];

function solution(L, K, cameras, limits) {
  let answer = 0;
  let maxidx = [];
  // 속도가 가장 큰 카메라를 없앤다.
  for (let i = 0; i < K; i++) {
    let limMax = Math.max(...limits);
    maxidx.push(limits.indexOf(limMax));
    limits.splice(maxidx[i], 1);
    cameras.splice(maxidx[i], 1);
  }
  answer = (cameras[1] - cameras[0]) * limits[0] + (L - cameras[1]) * limits[1];

  return answer;
}
console.log(solution(L, K, cameras, limits));
