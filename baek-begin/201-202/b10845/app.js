const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

solution(N, input);

function solution(N, input) {
  let arr = [];
  let ans = [];

  for (let i = 0; i < N; ++i) {
    let str = input[i].split(' ');

    if (str[0] === 'push') {
      arr.push(str[1]);
    } else if (str[0] === 'pop') {
      ans.push(arr.shift() || -1);
    } else if (str[0] === 'size') {
      ans.push(arr.length);
    } else if (str[0] === 'empty') {
      ans.push(arr[0] ? 0 : 1);
    } else if (str[0] === 'front') {
      ans.push(arr[0] || -1);
    } else if (str[0] === 'back') {
      ans.push(arr[arr.length - 1] || -1);
    }
  }
  console.log(ans.join('\n'));
}