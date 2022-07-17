// 모든 종목의 가격 0 맞추기
// 모든 종목은 1주씩 구매
// 선택한 종목보다 앞에 있는 모든 종목 1주씩 판매 가능
// 선택한 종목보다 뒤에 있는 모든 종목을 1주씩 판매 가능

// 모든 종목을 0주로 만드는 최소 횟수 반환
let stocks = [10, 10, 4, 7];

function solution(stocks) {
  var answer = 0;
  // 작은 수 선택하고 전체 요소를 작은수의 크기만큼 감소 시켜주고 횟수에 카운트
  let min = Math.min(...stocks);
  stocks = stocks.map((v) => v - min);
  answer += min;

  return answer;
}
solution(stocks);
