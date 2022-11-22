const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input[0]);

function solution(n) {
  let answer = "";

  while (n.length >= 3) {
    answer = parseInt(n.slice(n.length - 3), 2).toString(8) + answer;
    n = n.slice(0, n.length - 3);
  }
  console.log((n ? parseInt(n, 2).toString(8) : "") + answer);
}