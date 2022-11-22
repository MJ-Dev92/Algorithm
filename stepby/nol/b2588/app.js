const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

let num = [input[0], input[1]];
let arraynum = num[1].split('').map((item) => +item);
let one = arraynum[2];
let ten = arraynum[1];
let hun = arraynum[0];

solution(num[0], num[1]);
function solution(A, B) {
  console.log(A * one);
  console.log(A * ten);
  console.log(A * hun);
  console.log(A * B);
}