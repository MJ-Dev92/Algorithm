const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

solution(N, input[0].split(' ').map(item => +(item)));

function solution(N, num) {
  let stack = [];
  for (let i = 0; i < N; ++i) {
    while (num[stack[stack.length - 1]] < num[i]) {
      num[stack.pop()] = num[i]; 
    }
    stack.push(i);
  }
  while (stack.length) {
    num[stack.pop()] = -1;
  }

  console.log(num.join(' '));
}