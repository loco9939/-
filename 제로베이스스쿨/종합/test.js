let nums = ["5", "2", "4", "3"];
let operations = ["i", "i", "d", "m"];
function solution(nums, operations) {
  let res = [];
  for (let p = 0; p < nums.length; p++) {
    if (operations[p] == "i") {
      res.push((parseInt(nums[p]) + 1).toString());
    } else if (operations[p] == "m") {
      res.push((parseInt(nums[p]) * 2).toString());
    } else if (operations[p] == "d") {
      res.push((parseInt(nums[p]) - 1).toString());
    }
  }
  return res;
}
console.log(solution(nums, operations));
