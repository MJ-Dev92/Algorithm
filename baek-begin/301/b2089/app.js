const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(+input[0]);

function solution(n) {
  let answer = [];

  if (n === 0) {
    console.log(0);
  } 
  else {
    while (n !== 0) {

      if (n % -2 === 0) {
        answer.unshift(0);
        n /= -2;
      } else if (n % -2 === 1 || n % -2 === -1){
        answer.unshift(1);
        n = (n - 1) / -2;
      }
    }
  }
  console.log(answer.join(""));
}