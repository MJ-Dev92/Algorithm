const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input);

function solution(N) {
  let count = 0;

  while (true) {
    if (N % 5 === 0) {
      console.log(N / 5 + count);
      break;
    }
      
    if (0 > N) {
      console.log(-1);
      break;
    }
  
    count++;
    N -= 3;
  }
}
