const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const splitedNum = input[0].split(' ').map(item => +(item));

solution(splitedNum[0], splitedNum[1], splitedNum[2]);

function solution(A, B, V) {

  console.log(Math.ceil((V - B) / (A - B)));
}
