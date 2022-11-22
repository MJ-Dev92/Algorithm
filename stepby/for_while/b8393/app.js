const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

/* let answer = 0;
for (let i = 1; i <= input[0]; i++) {
  answer = answer + i;
}

console.log(answer); */

let answer = 0;
for (let i = 1; i <= input[0]; i++) {
  answer += i;
}

console.log(answer);