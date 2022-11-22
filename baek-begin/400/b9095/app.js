const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let T = input.shift();

solution(T, input);

function solution(T, input) {
  for (let i = 0; i < T; ++i) {
    let n = +input[i];
    let arr = Array(n + 1).fill(0);

    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;

    for (let j = 3; j < arr.length; ++j) {
      arr[j] = arr[j - 1] + arr[j - 2] + arr[j - 3];
    }
    console.log(arr[n]);
  }
}