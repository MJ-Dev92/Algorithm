const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [N, K] = input[0].split(' ');

solution(N, K);

function solution(N, K) {
  let arr = [];
  let ans = [];

  for (let i = 1; i <= N; ++i) {
    arr.push(i);
  }

  for (let i = 1; i <= N; ++i) {
    for (let j = 1; j < K; ++j) {
      arr.push(arr.shift(j));
    }
    ans.push(arr.shift());
  }
  console.log('<' + ans.join(', ') + '>');
}