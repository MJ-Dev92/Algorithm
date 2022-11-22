const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input.map((item) => +item);

solution(num);
function solution(A) {
  if (A <= 100 && A >= 90) {
    console.log('A');
  } else if (A <= 89 && A >= 80) {
    console.log('B');
  } else if (A <= 79 && A >= 70) {
    console.log('C');
  } else if (A <= 69 && A >= 60) {
    console.log('D');
  } else {
    console.log('F');
  }
};