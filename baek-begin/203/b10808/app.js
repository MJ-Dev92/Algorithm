const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input[0]);

function solution(S) {
  let arr = new Array(26).fill(0);

  for (let i = 0; i < S.length; ++i) {
    let char = S[i];
    let nowC = char.charCodeAt() - 97;

    arr[nowC]++;
  }
  console.log(arr.join(" "));
}