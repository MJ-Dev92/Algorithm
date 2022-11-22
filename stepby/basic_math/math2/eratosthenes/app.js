const fs = require('fs');
const { getSystemErrorMap } = require('util');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let N = +input[0];

solution (N);

function solution(N) {
  let arr = Array(N + 1).fill(0);

  for (let i = 0; i <= N; ++i) {
    arr[i] = i; 
  }

  arr[0] = true;
  arr[1] = true;

  for (let i = 2; i < Math.sqrt(arr.length); ++i) {
    if (arr[i] !== true) {
      for (let j = i * i; j <= N; j += i) {
        arr[j] = true;
      }
    }
  }
  for (let i = 0; i < arr.length; ++i) {
    if(arr[i] !== true) {
      console.log(i);
    }
  }
}
