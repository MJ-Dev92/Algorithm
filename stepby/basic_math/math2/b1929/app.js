const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let splitedinput = input[0].split(' ').map(item => +(item));

solution(splitedinput[0], splitedinput[1]);

function solution(M, N) {
  
  let arr = Array(N + 1).fill(0);

  for (let i = 0; i <= N; ++i) {
    arr[i] = i;
  }

  arr[0] = true;
  arr[1] = true;

  for (let i = 2; i < Math.sqrt(arr.length); ++i) {
    if (arr[i] !== true) {
      for (let j = i * i; j <= N; j += i) {
        arr[j] = true;
      }
    }
  }
  
  for (let i = M; i <= N; ++i) {
    if (arr[i] !== true) {
      console.log(i);
    }
  }
}