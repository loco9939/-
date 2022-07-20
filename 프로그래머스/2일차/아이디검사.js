let new_id = "";

function solution(new_id) {
  var answer = "";
  answer = new_id.toLowerCase()
  .replace(/[^0-9a-z-_\.]/g , "")
  .replace(/\.+\./g, ".")
  .replace(/^\.|\.$/g,"");
  if(answer === "") {
    answer = "a"
  }
  if (answer.length >= 16) {
    answer = answer.slice(0,15);
  }
  answer = answer.replace(/\.$/g,"")
  if (answer.length === 1) {
    answer += answer[0].repeat(2)
  } else if (answer.length === 2) {
    answer += answer[1].repeat(1)
  }
  return answer;
}

solution(new_id);
