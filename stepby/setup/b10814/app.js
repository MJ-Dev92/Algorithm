const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift(1);

solution(N, input);

function solution(N, arr) {
  arr.sort((a, b) => parseFloat(a) - parseFloat(b));

  console.log(arr.join('\n'));
}