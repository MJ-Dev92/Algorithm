const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(' ').map(item => +(item));
let score = input[1].split(' ').map(item => +(item));

solution(num, score);

function solution(num, score) {
  let k = num[1];
  let arr = Array();
  
  score.sort((a, b) => b - a).map(item => +(item));

  for (let i = 0; i < k; ++i) {
    arr.push(score[i]);
  }
  console.log(Math.min(...arr));
}