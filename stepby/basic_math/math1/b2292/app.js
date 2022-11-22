const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(A) {
  let count = 1;
  let sum = 1;
  while (true) { // while true is infinite repeat
    if (A <= sum) {
      break;
    }
    sum += count * 6;
    count++;
  }
  console.log(count);
}
