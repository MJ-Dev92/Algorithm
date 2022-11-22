const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift(1);

solution(N,input);

function solution(N, P) {
  const stack = [];
  const result = [];
  
  for (let i = 0; i < N; ++i) {
    if (P[i] === 'pop') {
      result.push(stack.pop() || -1);
  
    } else if (P[i] === 'size') {
      result.push(stack.length);
  
    } else if (P[i] === 'empty') {
      result.push(stack[0] ? 0 : 1);
  
    } else if (P[i] === 'top') {
      result.push(stack[stack.length - 1] || -1);
    } else {
      stack.push(P[i].split(' ')[1]);
    }
  }

  console.log(result.join('\n'));
}



/* solution in switch way */

/* const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift(1);

solution(N,input);

function solution(len, array) {
  const stack = [];
  const result = [];
  
  for (let i = 0; i < len; i++) {        
      switch(array[i]) {
          case 'pop': 
            result.push(stack.pop() || -1);
            break;
  
          case 'size': 
            result.push(stack.length);
            break;
  
          case 'empty': 
            result.push(stack[0] ? 0 : 1);
            break;
  
          case 'top': 
            result.push(stack[stack.length - 1] || -1);
            break;
  
          default: 
            stack.push(array[i].split(" ")[1]);
            break;
      }
  }
  
  console.log(result.join('\n'));
} */
