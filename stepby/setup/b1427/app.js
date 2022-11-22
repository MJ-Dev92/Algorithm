const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split('').map(item => +(item));

solution(num);

function solution(M) {
  M.sort((a, b) => b - a);

  console.log(M.join(''));
}
