const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const items = input.map((item) => +item);

solution(items);

function solution(X) {
  let max = 0;
  let maxIdx = 0;

  for (let i = 0; i < 9; ++i) {
    const item = X[i];

    if (max < item) {
      max = item;
      maxIdx = i;
    }
  }
  console.log(max);
  console.log(maxIdx + 1);
}