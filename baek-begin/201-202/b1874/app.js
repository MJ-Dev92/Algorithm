const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = input.shift();

solution(N, input);

function solution(n, input) {
  const arr = [];
  let answer = '';
  let count = 1;
  let imposible = 0;

  for (let i = 0; i < n; ++i) {
    const number = +input[i];
    
    while (count <= number) {
      arr.push(count++);
      answer += '+';
    }

    const popedItem = arr.pop();
    if (popedItem !== number) {
      imposible = 1;
    }
    answer += '-';
  }

  if (imposible === 1) {
    console.log('NO');
  } else {
    console.log(answer.split('').join('\n'))
  }
}
