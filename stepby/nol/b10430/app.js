const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

num = input[0].split(' ').map((item) => +item);

solution(num[0], num[1], num[2]);
function solution(A, B, C) {
  console.log((A + B) % C);
  console.log(((A % C)+ (B % C)) % C);
  console.log((A * B) % C);
  console.log(((A % C) * (B % C)) % C);
}