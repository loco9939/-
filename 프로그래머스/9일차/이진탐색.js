// Binary Search
// 이진 탐색

let input = [1,10,20,47,59,63,75,88,99];


function binarySearch(arr,target) {
  let Low = 0;
  let High = arr.length - 1;

  while ( Low <= High ) {
    let Middle = Math.floor((Low+High)/2);
    
    if (target < arr[Middle]) {
      High = Middle - 1;
    } else if (target > arr[Middle]) {
      Low = Middle + 1;
    } else {
      return Middle;
    }
  }
  return -1;
}

console.log(binarySearch(input,70));
// console.log(input.indexOf(20));