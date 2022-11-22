const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


solution(input[0]);

function solution (char) {
  let answer = [];

  for (let i = 0; i < char.length; ++i) {

    if (char[i] >= "A" && char[i] <= "Z") {
      let rot = String(char[i]).charCodeAt() + 13

      if (rot > 90) {
        rot -= 26
      }
      answer += String.fromCharCode(rot);
    } else if (char[i] >= "a" && char[i] <= "z") {
      let rot = String(char[i]).charCodeAt() + 13;

      if (rot > 122) {
        rot -= 26
      }
      answer += String.fromCharCode(rot);
    } else {
      answer += char[i];
    }
  }
  console.log(answer);
}