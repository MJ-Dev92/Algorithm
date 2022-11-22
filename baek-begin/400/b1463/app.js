const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
  let arr = Array(N + 1).fill(0); 

  for (let i = 2; i <= N; ++i) {
    arr[i] = arr[i - 1] + 1;
    if (i % 2 === 0 && arr[i] > arr[i / 2] + 1) {
      arr[i] = arr[i / 2] + 1;
    }
    if (i % 3 === 0 && arr[i] > arr[i / 3] + 1) {
      arr[i] = arr[i / 3] + 1;
    }
  }
  console.log(arr[N]);
}