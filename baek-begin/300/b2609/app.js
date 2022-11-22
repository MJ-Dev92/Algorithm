const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(' ').map(item => +(item));

solution(num[0], num[1]);

function solution(A, B) {
  let value = 1;

  for (let i = 2; i < 10000; ++i) {
    while (A % i === 0 && B % i === 0) {
      A /= i;
      B /= i;
      value *= i;
    }
  }

  console.log(value);
  console.log(A * B * value);
}