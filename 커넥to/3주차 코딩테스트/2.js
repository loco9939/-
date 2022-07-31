// 문자열 1개 주어지는데 이는 x,y,z 만으로 이루어짐

// 원하는 문자열로 바꾸고 싶은데 규칙이 있다.
// xy 문자열은 yx로 바꿀 수 있고
// yz 문자열은 zy로 바꿀 수 있다.
let ini = "xyyxyz";
let trans = "yyxxzy";

function solution(ini, trans) {
  var answer = "";

  // 0. 두 문자열의 길이 비교
  if (ini.length !== trans.length) return "NO";

  // 1. ini와 trans를 비교하여 일단 x,y,z 갯수가 같아야 한다.
  let ini_obj = {};
  let trans_obj = {};
  for (let i of ini) {
    if (!ini_obj[i]) {
      ini_obj[i] = 1;
    } else {
      ini_obj[i]++;
    }
  }
  for (let i of trans) {
    if (!trans_obj[i]) {
      trans_obj[i] = 1;
    } else {
      trans_obj[i]++;
    }
  }
  for (const key in ini_obj) {
    if (ini_obj[key] !== trans_obj[key]) {
      return "NO";
    }
  }

  // 2. 같은 위치에 같은 문자 있으면 제거
  let ini_arr = ini.split("");
  let trans_arr = trans.split("");
  ini_arr.forEach((el, index) => {
    if (el === trans_arr[index]) {
      delete ini_arr[index];
      delete trans_arr[index];
    }
  });
  
  // return "YES"
  ini_arr = ini_arr.filter((el) => el !== undefined);
  trans_arr = trans_arr.filter((el) => el !== undefined);
  
  ini = ini_arr.join("");
  trans = trans_arr.join("");
  console.log(ini, trans)
  

  return answer;
}
console.log(solution(ini, trans));
