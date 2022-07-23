// 최솟값의 위치를 반환하는 함수

let arr = [5, 2, 10, 2];
let arr1 = [4, 5, 7, 4, 8];
let arr2 = [12, 11, 11, 16, 11, 12];

function min(arr) {
  let low = 100;

  for (let i = 0; i < arr.length; i++) {
    if (low > arr[i]) {
      low = arr[i];
    }
  }
  console.log(low);
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === low) {
      result[count++] = i;
    }
  }
  return result;
}

console.log(min(arr2));
