var phone_number1 = "01033334444";
var phone_number2 = "027778888";

function solution(phone_number) {
  var answer = "";
  var str = "*".repeat(phone_number.length-4)
  var num = phone_number.slice(-4)
  answer = str + num
  return answer;
}

console.log(solution(phone_number2));
