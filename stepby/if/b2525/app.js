const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let Time = input[0].split(' ').map((item) => +item);

solution(Time[0], Time[1], +input[1]);

function solution(H, M, C) {
  M += C
  while (M >= 60) {
      H += 1;
      M -= 60;
  }
  
  H %= 24;
  console.log(H, M);
}