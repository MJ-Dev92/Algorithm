const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let answer = '';
let num = +input[0];

for (let i = num; i <= 1; i--) {
  answer += i + '\n';
}

console.log(answer);