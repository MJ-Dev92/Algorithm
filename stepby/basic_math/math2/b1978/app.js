const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const T = parseInt(input.shift());
const numbers = input[0].split(' ').map(num => parseInt(num));

let counter = 0;

function primeNumber(n) {
  if (n < 2) {
    return;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }
    counter++;
}

  for (let i = 0; i < T; i++) {
    primeNumber(numbers[i]);
  }

  console.log(counter);


/* let N = +input[0];
let num = input[1].split(' ').map(item => +(item));

solution (N, num);

function solution(N, num) {
  let answer = 0;

  let arr = Array(1000 + 1).fill(0);

  for (let i = 0; i <= 1000; ++i) {
    arr[i] = i; 
  }

  arr[0] = true;
  arr[1] = true;

  for (let i = 2; i < Math.sqrt(arr.length); ++i) {
    if (arr[i] !== true) {
      for (let j = i * i; j <= 1000; j += i) {
        arr[j] = true;
      }
    }
  }

  for (let i = 0; i < N; ++i) {
    let A = num[i];

      if(arr[A] !== true) {
        answer++;
      } 
  }
  console.log(answer);
} */


