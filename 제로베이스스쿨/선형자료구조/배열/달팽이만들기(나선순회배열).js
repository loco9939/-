function solution(length) {
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    result[i] = new Array(length);
  }
  // 1. 각 위치 포인터 초기화
  let top = 0;
  let left = 0;
  let right = length - 1;
  let bottom = length - 1;
  let count = 0;
  // 2. 반복문 구현
  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      count++;
      result[top][i] = count;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      count++;
      result[i][right] = count;
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        count++;
        result[bottom][i] = count;
      }
    }
    bottom--;

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        count++;
        result[i][left] = count;
      }
    }
    left++;
  }
}
solution(length);
