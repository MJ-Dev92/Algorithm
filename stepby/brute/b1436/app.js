const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
  let num = 666;
  let cnt = 1;

  while (cnt !== N) {
    num++;
    if (String(num).includes('666')) {
      cnt++;
    }
  }
  console.log(num);
}