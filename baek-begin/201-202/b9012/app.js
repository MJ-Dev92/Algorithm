const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

solution(N, input);

function solution(N, input) {
  for (let i = 0; i < N; ++i) {
    let arr = [];
    let istrue = true;
    let str = input[i].split('');

    for (let j = 0; j < str.length; ++j) {  
      if (str[j] === '(') {
        arr.push(str[j]);
      } else if (str[j] === ')') {  
        if (arr.length === 0) {
          istrue = false;
          break;
        } else {
          arr.pop();
        }
      }
    } 
    if (arr.length === 0 && istrue === true) {
      console.log('YES');
    } else {
      console.log('NO');
    }
  }
}

