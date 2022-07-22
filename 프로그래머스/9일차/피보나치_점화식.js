// 피보나치 수열

function Fibonacci(number) {
  if (number === 0 || number === 1) {
    return number;
  }
  return Fibonacci(number - 1) + Fibonacci(number - 2);
}
console.log(Fibonacci(7));
