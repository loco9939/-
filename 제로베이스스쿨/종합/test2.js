let s = "imfinethankyou"; // String
let t = "atfhinemnoyuki";

function solution(s, t) {
  // String
  let res = true;
  // 문자열 쪼갠 다음 각각의 문자열이 일치하면 에너그램
  let new_s = s.split("").sort();
  let new_t = t.split("").sort();

  new_s = new_s.join()
  new_t = new_t.join()
  res = (new_s == new_t);
  console.log(res)
  // 혹은 문자열 정렬한다음에 서로 일치하면 에너그램

  return res;
}

solution(s,t);