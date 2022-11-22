const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input[0]);

function solution(S) {
  let arr = new Array(26).fill(-1);

  for (let i = 0; i < S.length; ++i) {
    let char = S[i];
    let indexChar = char.charCodeAt() - 97;
    
    for (let j = 0; j < char.length; ++j) {
      if (arr[indexChar] === -1) {
        arr[indexChar] = i;
      } 
    }
  }
  console.log(arr.join(" "));
}