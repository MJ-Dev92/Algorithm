const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(" ").map(item => +(item));

solution(num[0], num[1]);

function solution(N, B) {
  let result = [];

  while (N > 0) {
    result.push(getCode(N % B));
    N = parseInt(N / B);
  }
  console.log(result.reverse().join(""));


  function getCode(numbers) {
    if (numbers >= 10) {
      return String.fromCharCode(numbers + 55);
    } else {
      return numbers;
    }
  }
}