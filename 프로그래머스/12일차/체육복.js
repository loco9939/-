function solution(n, lost, reserve) {
  var answer = 0;
  // 1. 배열을 사용하기 쉽게 하기 위해 정렬
  lost.sort();
  reserve.sort();

  // 2. lost와 reserve 중복 요소있으면 lost 배열에서 제거
  for (let i = 0; i < lost.length; i++) {
    let element = lost[i];
    if (reserve.includes(element)) {
      reserve.splice(reserve.indexOf(lost[i]), 1);
      lost.splice(i, 1);
    }
  }

  // 3. lost 요소보다 -1인 요소 reserve에 있으면 lost에서 요소 제거 그리고 +1 인 요소 reserve에 있으면 lost에서 요소 제거
  for (let i = 0; i < lost.length; i++) {
    let element = lost[i];
    if (reserve.includes(element - 1)) {
      reserve.splice(reserve.indexOf(element - 1), 1);
      answer ++;
    } else if (reserve.includes(element + 1)) {
      reserve.splice(reserve.indexOf(element + 1), 1);
      answer ++
    }
  }
  answer += n - lost.length;
  return answer;
}
console.log(solution(5, [4, 3], [1, 3, 5]));
