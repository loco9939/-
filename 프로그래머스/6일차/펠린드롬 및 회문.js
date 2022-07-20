// 앞으로 읽었을 때나 뒤로 읽었을 때 같은 문자열
// ex) level, eye, hannah

// 1. 추가 문자열

let str1 = "level";
let str2 = "david";
let str3 = "eye";

function solution(str) {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  let result = arr.join("");
  if (result === str) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}
console.log(solution(str1));

// 2. two pointer 활용
function checkPalindrome(str) {
  const len = str.length;
  const middle = Math.floor(len / 2);
  for (let i = 0; i < middle; i++) {
    if (str.charAt(i) !== str.charAt(len - 1 - i)) {
      return false;
    }
    return true;
  }
}
checkPalindrome(str1);
