const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input[0]);

function solution(N) {
  let stack = [];
  let ans = 0;

  for (let i = 0; i < N.length; ++i) {
    if (N[i] === "(") {
      stack.push(N[i]);

    } else if (N[i] === ")") {

      if (N[i - 1] === "(") {
        stack.pop();
        ans += stack.length;
        
      } else {
        ans += 1;
        stack.pop();
      }
    }
  }
  console.log(ans);
}