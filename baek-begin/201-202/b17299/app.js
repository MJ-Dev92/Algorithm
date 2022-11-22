const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

solution(N, input[0].split(' ').map(item => +(item)));

function solution(N, num) {
  let stack = [];
  let arr = Array(Math.max(...num) + 1).fill(0);
  
  for (let i = 0; i < N; ++i) {
    if (arr[num[i]] === 0) {
      arr[num[i]] = 1;
    } else {
      arr[num[i]]++;
    }

    while (arr[num[stack[stack.length - 1]]] < arr[num[i]]) {
      num[stack.pop()] = num[i];
    }
    stack.push(i);
  }

  while (stack.length) {
    num[stack.pop()] = -1;
  }
  console.log(num.join(' '));
}