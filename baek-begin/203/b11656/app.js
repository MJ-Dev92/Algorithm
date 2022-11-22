const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input[0]);

function solution (char) {
  let answer = [];

  for (let i = 0; i < char.length; ++i) {
    let nowC = char.slice(i);
    answer.push(nowC);
  }
  console.log(answer.sort().join("\n"));
}