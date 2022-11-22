const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(+input[0]);

function solution(A) {
  let obj = {};
  
  obj[0] = 0;
  obj[1] = 1;

  for (let i = 2; i <= A; ++i) {
    obj[i] = obj[i - 1] + obj[i - 2];
  }

  console.log(obj[A]);
}