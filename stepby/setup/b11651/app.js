const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift(1));
const num = input.map(item => item.split(' '));

solution(N, num);

function solution(N, num) {
  let answer = '';

  num.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  })
  .forEach(arr => {
    answer += `${arr[0]} ${arr[1]}\n`
  });
  console.log(answer);
}