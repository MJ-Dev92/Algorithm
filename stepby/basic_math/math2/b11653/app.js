const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution (+input[0]);

function solution(N) {
  for (let i = 2; i <= Math.sqrt(N); ++i) {
    while (N % i === 0) {
      
      N = N / i;
      console.log(i);
    }
  }
  if (N !== 1) {
    console.log(N);
  }
}
