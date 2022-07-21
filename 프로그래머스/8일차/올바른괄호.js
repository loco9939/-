// 올바른 괄호

let input = "[[(({}))]]";

function checkBracket(input) {
  let result = [];
  for (const i of input) {
    if (i === "(" || i === "[" || i === "{") {
      result.push(i);
    } else {
      const lastChar = result.pop();
      if (
        (i === "}" && lastChar !== "{") ||
        (i === ")" && lastChar !== "(") ||
        (i === "]" && lastChar !== "[")
      ) {
        return false;
      }
    }
  }
  return result.length === 0;
}
// console.log(checkBracket(input))
console.log(checkBracket(input));
