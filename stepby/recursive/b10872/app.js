const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(+input[0]);

function solution(A) {
  let answer = 1;

  for (let i = A; i > 0; --i) {

    answer = answer * i;
  }
  console.log(answer);
}