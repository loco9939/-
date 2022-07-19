// 못품
// 못품
// 못품
// 못품
let new_id = "...!@BaT#*..y.abcdefghijklm";

function solution(new_id) {
  var answer = "";
  // 1단계
  answer = new_id.toLowerCase();

  // 2단계
  answer = answer.replace("!", "");
  answer = answer.replace("@", "");
  answer = answer.replace("?", "");
  answer = answer.replace("#", "");
  answer = answer.replace("*", "");

  // 3단계
  for (let i = 0; i < answer.length; i++) {
    answer = answer.replace("..", ".");
  }

  // 4단계
  if (answer[0] == ".") {
    answer.slice(0)
  }
  if (answer[-1] == "."){
    answer.slice(-1)
  }
  return answer;
}

console.log(solution(new_id));


