function solution(matrix) {
  var answer = true;
  for (let i = 0; i < matrix.length; i++) {
   for (let n = 0 ; n <matrix.length;n++) {
    if (matrix[i][Math.floor(n/2)] === matrix[Math.floor(n/2)][i]){
      return true
    }
   } 
  }
  return answer;
}