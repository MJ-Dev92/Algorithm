const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input.shift();

solution(num, input);

function solution(N, input) {
  const M = input.map(item => +(item));
  M.sort((a, b) => a - b);

  console.log(M.join('\n'));
}