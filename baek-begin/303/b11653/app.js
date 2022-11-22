const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
  for (let i = 2; i <= N; ++i) {
    while (N % i === 0) {
      N /= i;
      console.log(i);
    }
  }
}