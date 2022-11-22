const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input[0].split(' ').map((item) => +item);

solution(num);

function solution(num) {
  for (let i = 1; i <= num; ++i) {
    let count = 0;
    let sum = 0;
    
    N = input[i].split(' ').map((item) => +item);
    const countN = N[0];
    
    for (let j = 1; j <= countN; ++j) {
      sum += N[j];
    }

    const avg = sum / countN;

    for (let k = 1; k <= countN; ++k) {
      if (avg < N[k]) {
        count++;
      }
    }
    console.log(((count / countN) * 100).toFixed(3) + "%");
  }
}