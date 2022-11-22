const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input.map(item => +(item));

solution(num[0], num[1]);

function solution(A, B) {
  if (A > 0 && B > 0) {
    console.log(1);
  } else if (A < 0 && B > 0) {
    console.log(2);
  } else if (A < 0 && B < 0) {
    console.log(3);
  } else if (A > 0 && B < 0) {
    console.log(4);
  }
}