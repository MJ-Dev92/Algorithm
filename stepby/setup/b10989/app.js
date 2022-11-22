const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(N) {
  let M = N[0];
  
  N.sort((a, b) => a - b);
  for (let i = 0; i < M; ++i) {
    console.log(N[i]);
  }
}