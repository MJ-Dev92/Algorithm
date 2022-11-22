const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input[0].split("");

solution(str);

function solution(str) {
  let answer = [];
  let stack = [];

  const operatiors = ["+", "-", "*", "/", "(", ")"];

  for (let i = 0; i < str.length; ++i) {
    let text = str[i];

    if (operatiors.includes(text)) {      
      if (stack[stack.length - 1] === "*" || stack[stack.length - 1] === "/") {
        if (text !== "(") {
          if (text === "*" || text === "/" || text === "+" || text === "-") {
            answer.push(stack.pop());
          } 
        }
      }
      if (stack[stack.length - 1] === "+" || stack[stack.length - 1] === "-") {
        if (text === "+" || text === "-") {
          answer.push(stack.pop());
        } 
      }
      stack.push(text);

      if (text === ")") {
        for (let i = stack.length - 1; i >= 0; --i) {
          if (stack[i] === "(") {
            stack.pop();
            break;
          } else if (stack[i] === ")") {
            stack.pop();
          } else {
            answer.push(stack.pop());
          }
        }
      }

    } else {
      answer.push(text);
    }
  }
  if (stack.length !== 0) {
    for (let i = 0; i <= stack.length; ++i) {
      answer.push(stack.pop());
    }
  }
  console.log(answer.join(''));
}