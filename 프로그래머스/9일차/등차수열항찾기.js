let num = 0;
let count = 0;
function arithmetic(start, gap, target) {
  if (num === target) {
    return count;
  }
  if (count === 0) {
    num = start;
  } else if (num > target) {
    return -1;
  } else {
    num += gap;
  }
  count++;
  return arithmetic(start, gap, target);
}
console.log(arithmetic(3, 5, 23));

function answer(start, gap, target) {
	let index = -1;

	if ((target - start) % gap === 0) {
		index = (target - start) / gap + 1;
		return index;
	}
	return index;
}
console.log(answer(2,3,10));