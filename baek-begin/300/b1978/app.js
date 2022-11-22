const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const T = input.shift();
const numbers = input[0].split(" ").map(item => parseInt(item));

solution(T, numbers);

function solution(T, numbers) {
  let count = 0;

  function primeNumber(n) {
    if (n < 2) {
      return;
    }

    for (let i = 2; i < n; ++i) {
      if (n % i === 0) {
        return;
      } 
    }
    count++;
  }

  for (let i = 0; i < T; ++i) {
    primeNumber(numbers[i]);
  }
  console.log(count);
}