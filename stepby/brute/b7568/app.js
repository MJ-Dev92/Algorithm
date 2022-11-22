const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const N = input.shift();
const KgCmTable = input.map(item => item.split(' ').map(item => +(item)));

solution(N, KgCmTable);

function solution (N, kg) {
  let rank = [];

  for (let i = 0; i < N; ++i) {
    let answer = 0;
    for (let j = 0; j < N; ++j) {

      if (i !== j) {

        if (
          kg[i][0] < kg[j][0] &&
          kg[i][1] < kg[j][1]
        ) {
          answer++;
        }
      }
    }
    rank.push(answer + 1);
  }
  console.log(rank.join(' '));
}