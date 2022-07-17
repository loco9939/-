// 한번에 한명의 유저에게 신고 가능
// 신고 횟수 제한 없다
// 한 유저 여러번 신고 가능 하지만 1회로 처리
// k번 이상 신고된 유저는 정지되고 해당 유저 신고한 사람들에게 메일 보냄

const user_list = ["muzi", "frodo", "apeach", "neo"];
const k = 2;

function solution(id_list, report, k) {
  let answer = [];
  // 신고한 사람이 중복으로 하는 것은 1회 처리니 중복 제거를 위해 set
  const reportSet = new Set(report);
  const reportCount = {};
  const reportedBy = {};
  const mailCount = {};

  id_list.forEach((element) => {
    reportCount[element] = 0;
    mailCount[element] = 0;
    reportedBy[element] = [];
  });

  reportSet.forEach((element)=>{
    const [id, reported] = element.split(" ");
    reportCount[reported] += 1;
    reportedBy[reported].push(id);
  });

  for (const reportedId in reportCount) {
    if (reportCount[reportedId] >= k) {
      reportedBy[reportedId].forEach((reporter) => {
        mailCount[reporter] += 1;
      });
    }
  }

  return id_list.map((id) => mailCount(id));
}
