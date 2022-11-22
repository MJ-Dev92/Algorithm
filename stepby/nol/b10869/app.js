const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = input[0].split(' ').map((item) => +item);

solution(num[0], num[1]);
function solution(A, B) {
  console.log(A + B);
  console.log(A - B);
  console.log(A * B);
  console.log(Math.floor(A / B));
  console.log(A % B);
}