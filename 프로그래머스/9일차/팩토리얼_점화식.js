// 팩토리얼 점화식
let result = 1;
function Factorial(input) {
  if (input !== 0) {
    result *= input;
    input--;
  } else {
    return result;
  }
  return Factorial(input);
}

console.log(Factorial(10));

function recursive(num) {
  if (num === 1) {
    return 1;
  }
  return recursive(num - 1) * num;
}
console.log(recursive(10))
