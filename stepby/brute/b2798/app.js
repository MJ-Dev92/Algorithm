const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const cards = input[1].split(' ').map(item => +(item));
const [N, M] = input[0].split(' ').map(item => +(item));


solution(M, N, cards);

function solution(M, N, cards) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < N; ++i) {
    for (let j = i + 1; j < N; ++j) {
      for (let k = j + 1; k < N; ++k) {
        sum = cards[i] + cards[j] + cards[k];
        if (sum > answer && sum <= M) {
          answer = sum;
        }
      }
    }
  }
  console.log(answer);
}