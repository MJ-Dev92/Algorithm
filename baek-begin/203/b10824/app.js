const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(" ");

solution(num[0], num[1], num[2], num[3]);

function solution(A, B, C, D) {
  let SumAB = A + B;
  let SumCD = C + D;
  
  let answer = Number(SumAB) + Number(SumCD);

  console.log(answer);
}