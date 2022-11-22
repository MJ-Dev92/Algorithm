const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(+input[0]);

function solution(N) {
  let answer = Array(N + 1).fill(0);

  answer[1] = 1;
  answer[2] = 2;

  for (let i = 3; i <= N; ++i) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 10007;
  }
  console.log(answer[N]);
}