const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input[0], input.slice(1));

function solution(A, B) {
  for (let i = 0; i < A; ++i) {
    let num = B[i].split(' ');
    let H = num[0];
    let W = num[1];
    let N = num[2];

    let Rn = parseInt(N / H);
    let Fn = N % H;

    if (Fn === 0) {
      console.log((H * 100) + Rn);
    } else {
      console.log((Fn * 100) + (Rn + 1));
    }
  }
}
