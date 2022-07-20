let stocks = [150, 80, 60, 50, 30];

function getMaxProfit(arr) {
  let answer = 0;

  // 1. 반복문을 돌리면서 나머지 요소와의 차이가 가장 큰 값을 출력한다.
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        answer = answer < arr[j] - arr[i] ? arr[j] - arr[i] : answer;
      }
    }
  }

  return answer;
}
// console.log(getMaxProfit(stocks));

function solution(arr) {
  let maxProfit = 0;
  let minBuyPrice = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (minBuyPrice > arr[i]) {
      minBuyPrice = arr[i];
    } else if (minBuyPrice < arr[i] && maxProfit < arr[i] - minBuyPrice) {
      maxProfit = arr[i] - minBuyPrice;
    }
  }
  return maxProfit;
}
console.log(solution(stocks));
