const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
  let answer = 0;
  while (N >= 5) {
    answer += parseInt(N / 5);
    N /= 5;
  }
  console.log(answer);
}