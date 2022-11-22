const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let splitedNum = input[0].split(' ').map(item => +(item));

solution(splitedNum[0], splitedNum[1], splitedNum[2]);

function solution(A, B, C) {

  if (B >= C) {
    console.log(-1);
  } else {
    console.log((A / (C - B)) + 1);
  }
}

/* 
const A = input[0] * 1;
const B = input[1] * 1;
const C = input[2] * 1;

const margin = C - B;
const count = Math.floor(A / margin) + 1

console.log(margin <= 0 ? -1 : count); */