const fruit = [
  ["사과", "빨간색"],
  ["바나나", "노란색"],
  ["포도", "보라색"],
  ["키위", "초록색"],
];
function array2(rows, columns){
	var arr = new Array(rows);
    for(var i = 0; i < rows; i++){
    	arr[i] = new Array(columns);
    }
    return arr;
}
var arr = array2(5, 2);
Array.addArray = function(m, n, initial){
	var a, i, j, addA = [];
   for (i = 0; i < m; i += 1){
   	a = [];
    for (j = 0; j <n; j+= 1){
    	a[j] = initial;
    }
    addA[i] = a;
   }
   return addA;
};

var arr = Array.addArray(5,2,0);
console.log(arr)

function solution(matrix) {
  var answer = true;

  var fruit = new Array(4);

  for (var i = 0; i < fruit.length; i++) {
    fruit[i] = new Array(2);
  }
  return answer;
}
