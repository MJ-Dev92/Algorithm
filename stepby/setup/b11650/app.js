const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input.shift());
const xy = input.filter((v, i) => i >= 0).map((v) => v.split(' '));
const xxy = input.map(item => item.split(' '));

solution(N, xxy);

function solution(N, xxy) {
  let answer = '';

  xxy.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  })
  .forEach(arr => {
    answer += `${arr[0]} ${arr[1]}\n`
  });
  console.log(answer);
}
