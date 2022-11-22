const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input.map((item) => +item);

solution(num[0], num[1], num[2]);

function solution(A, B, C) {
  const value = A * B * C;
  const strNum = String(value);
  const answer = Array(10).fill(0);
  
  for (let i = 0; i < strNum.length; i++) {
    const nowChar = +strNum[i];
    answer[nowChar]++;
  }
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}
