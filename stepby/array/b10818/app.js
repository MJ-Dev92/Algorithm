const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const arraylength = +input[0]
const items = input[1].split(' ').map((item) => +item);

solution(arraylength, items);

function solution(X, Y) {
  let min = 1000001;
  let max = -1000001;

  for (let i = 0; i < X; ++i) {
    const item = Y[i];

    if (min > item) {
      min = item;
    }
    if (max < item) {
      max = item;
    }
    
  }
  console.log(min, max);
}
