let id_list = ["muzi", "frodo", "apeach", "neo"];
let report = [
  "muzi frodo",
  "apeach frodo",
  "frodo neo",
  "muzi neo",
  "apeach muzi",
];
let k = 2;

function solution(id_list, report, k) {
  let answer = [];

  // report 요소를 신고당한 사람을 따로 구분하여 객체에 담는다.
  let reported = {}; // 신고당한그룹
  let reportedBy = {}; // 신고한 그룹
  let mailCount = [];
  report.forEach((element) => {
    let report_arr = element.split(" ");
    if (reported[report_arr[1]] === undefined) {
      reported[report_arr[1]] = 1;
    } else {
      reported[report_arr[1]] += 1;
    }
    reportedBy[report_arr[1]] = [];
  });

  report.forEach((element) => {
    let report_arr = element.split(" ");
    reportedBy[report_arr[1]].push(reportedBy[report_arr[0]]);
  });

  console.log(reported);
  console.log(reportedBy);

  return answer;
}

solution(id_list, report, k);

// result = [2,1,1,0];
