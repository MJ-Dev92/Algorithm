const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input[0].split(" ");


solution(str[0].split('').reverse(), str[1]);

function solution(B, N) {
  let answer = 0;
  
  for (let i = 0; i < B.length; ++i) {
    answer += (N ** i) * getNumber(B[i]);
  }
  console.log(answer);

  function getNumber(code) {
    if (isNaN(parseInt(code))) {
      return code.charCodeAt(0) - 55;
    } else {
      return parseInt(code);
    }
  }
}