const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(Str) {
  let answer = 0;

  for (let i = 0; i < Str.length; ++i) {
    let str = Str[i];
    if (str >= 'W') {
      answer += 10;
    } else if (str >= 'T') {
      answer += 9;
    } else if (str >= 'P') {
      answer += 8;
    } else if (str >= 'M') {
      answer += 7;
    } else if (str >= 'J') {
      answer += 6;
    } else if (str >= 'G') {
      answer += 5;
    } else if (str >= 'D') {
      answer += 4;
    } else if (str >= 'A') {
      answer += 3;
    }
    
  }
  console.log(answer);
}