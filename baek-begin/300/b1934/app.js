const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = input.shift();
let num = input.map(item => item.split(" "));

solution(T, num);

function solution (T, num) {

  for (let i = 0; i < T; ++i) {
    let num = input[i].split(" ").map(item => +(item));
    console.log(getLCM(...num));
  }

  function getGCD(a, b) {

    while (b > 0) {
      let tmp = a;
      a = b;
      b = tmp % b;
    }
    return a;
  }

  function getLCM(a, b) {
    return a * b / getGCD(a, b);
  }
}