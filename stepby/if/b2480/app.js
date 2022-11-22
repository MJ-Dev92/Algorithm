const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = input[0].split(' ').map((item) => +item);

solution(num[0], num[1], num[2]);

function solution(A, B, C) {
  if (A === B && A === C && B === C) {
    console.log(10000 + A * 1000);
  }
  if (A !== B || A !== C || B !== C) {
    if (A === B || A === C) {
      console.log(1000 + A * 100);
    } else if (B === C) {
      console.log(1000 + B * 100);
    }
  }
  if (A !== B && A !== C && B !== C ) {
    const sort = [A, B ,C].sort();
    console.log(sort.pop() * 100);
  }
};