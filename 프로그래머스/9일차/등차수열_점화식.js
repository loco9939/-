// 등차수열 점화식으로 구현
let result;
let acc = 0;
let num = 0;
function forloop(start, gap, count) {
  if (num === count) {
    return acc;
  }
  if (acc === 0) {
    acc += start;
  } else {
    acc += gap;
  }
  forloop(start, gap, count - 1);
  return acc;
}

result = forloop(3, 2, 5);
console.log(result);


function recursive(start, gap, count) {
  if (count === 1){
    return start;
  }

  return recursive(start, gap, count - 1) + gap
}
console.log(recursive(3,2,5))