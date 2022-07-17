// 아이디 규칙에 맞지 않는 아이디 입력시
// 입력한 아이디와 유사하면서 규칙에 맞는 아이디를 추천

// 아이디는 3자 이상 15자 이하
// 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)만 사용가능
// 마침표는 처음과 끝에 사용할 수 없고 연속으로 사용할 수 없다.
"use strict";
let sample_id = "=.=";
function solution(new_id) {
  let answer = "";
  // 1단계
  new_id = new_id.toLowerCase();
  console.log(new_id);
  // 2단계
  new_id = new_id.replaceAll("!", "");
  new_id = new_id.replaceAll("@", "");
  new_id = new_id.replaceAll("#", "");
  new_id = new_id.replaceAll("*", "");
  new_id = new_id.replaceAll("^", "");
  new_id = new_id.replaceAll("+", "");
  new_id = new_id.replaceAll("=", "");
  console.log(new_id);
  // 3단계 4단계
  for (let i = 0; i < new_id.length; i++) {
    if (new_id.includes("..")) {
      new_id = new_id.replace("..", ".");
    }
    if (new_id[0] === ".") {
      new_id = new_id.slice(1);
    } else if (new_id[new_id.length - 1] === ".") {
      new_id = new_id.slice(0, -1);
    }
  }
  console.log(new_id);
  // 5단계
  if (new_id === "") {
    new_id = "a";
  }
  console.log(new_id);
  // 6단계
  if (new_id.length >= 16) {
    new_id = new_id.slice(0, 15);
    if (new_id[new_id.length - 1] === ".") {
      new_id = new_id.slice(0, -1);
    }
  }
  console.log(new_id);
  // 7단계
  while (true) {
    if (new_id.length <= 2) {
      new_id += new_id[new_id.length - 1];
      console.log(new_id)
    }
    if (new_id.length >= 3) {
      break;
    }
  }

  

  return answer;
}

solution(sample_id);
