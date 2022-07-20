let id_list = ["con", "ryan"];
let report = ["ryan con", "ryan con", "ryan con", "ryan con"];
let k = 3;

function solution(id_list, report, k) {
  let answer = [];
  let reports = new Set(report);

  // report 요소를 신고당한 사람을 따로 구분하여 객체에 담는다.
  let reported = {}; // 신고당한그룹
  let reportedBy = {}; // 신고한 그룹
  let mailCount = {}; // 메일 갯수

  id_list.forEach((element) => {
    reported[element] = 0;
    reportedBy[element] = [];
    mailCount[element] = 0;
  });

  reports.forEach((element) => {
    let splitted = element.split(" ");
    reported[splitted[1]] += 1;
    reportedBy[splitted[1]].push(splitted[0]);
  });

  for (const el in reported) {
    if (reported[el] >= k) {
      for (const i of reportedBy[el]) {
        mailCount[i] += 1;
      }
    }
  }
  for (const el in mailCount) {
    answer.push(mailCount[el]);
  }
  return answer;
}

solution(id_list, report, k);
