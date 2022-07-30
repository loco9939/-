// a,b로만 이루어진 문자열 n개

// 여기서 a는 b로 b는 a로 변경하여 최장 부분 추출

// 최장 부분이란, 같은 문자로 이루어진 가장 긴 문자열

// 이 때 n이 주어지고 n개만큼 변경할 수 있을 때 최장 부분 문자열 길이 반환
let ab = "abab"
function solution(n, ab) {
  var answer = 0;

  for (let i = 0; i<n;i++){
    ab = ab.replace("a","b");
  }
  

  return ab.length;
}
solution(2,ab);