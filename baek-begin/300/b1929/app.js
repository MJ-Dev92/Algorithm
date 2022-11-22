const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(" ").map(item => +(item));

solution(num[0], num[1]);

function solution(M, N) {
  let arr = new Array(N + 1).fill(0);

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

  for (let i = M; i <= N; ++i) {
    if (arr[i] !==  true) {
      console.log(i);
    }
  }
}