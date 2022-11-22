const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input.map((item) => +item);

solution(num);
function solution(A) {
  if (A % 4 === 0 && A % 100 !== 0 || A % 400 === 0) {
    console.log(1);
  } else {
    console.log(0);
  }
};