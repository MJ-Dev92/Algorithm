const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let str = input.shift();
let N = input.shift();

solution(str, N, input);

function solution(str, N, input) {
  const arr = [];
  const arr1 = [];
  const reM = [];

  for (let i = 0; i < str.length; ++i) {
    arr.push(str[i])
  }

  for (let i = 0; i < N; ++i) {
    let item = input[i].split(' ');

    if (item[0] === "L") {
      if (arr.length !== 0) {
        arr1.push(arr.pop());
      }
    } else if (item[0] === "D") {
      if (arr1.length !== 0) {
        arr.push(arr1.pop());
      }
    } else if (item[0] === "B") {
      if (arr.length !== 0) {
        reM.push(arr.pop());
      }
    } else if (item[0] === "P") {
      arr.push(item[1]);
    }
  }
  while (arr1.length > 0) {
    arr.push(arr1.pop());
  }
  // for (let i = arr1.length; i > 0; --i) {
  //   arr.push(arr1.pop());
  // }
  console.log(arr.join(''));
}