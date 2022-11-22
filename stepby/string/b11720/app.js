const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const thenum = input[0].split(' ').map(item => +(item));
const num = input[1].split('').map(item => +(item));

solution(thenum, num);

function solution(N, num) {
  let answer = 0;
  
  for (let i = 0; i < N; ++i) {

    answer += num[i];
    
  }
  console.log(answer);
}
