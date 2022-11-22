const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let splitedInput = input[0].split(' ');

solution(splitedInput[0], splitedInput[1]);

function solution(num1, num2) {
  const A = BigInt(num1);
  const B = BigInt(num2);

  let answer = A + B;
  console.log(answer.toString());
}