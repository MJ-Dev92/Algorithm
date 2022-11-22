const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = input[0].split(" ");

solution(+num[0], +num[1], +num[2]);

function solution(A, B, C) {
  let first = (A + B) % C;
  let seconde = ((A % C) + (B % C)) % C;
  let third = (A * B) % C;
  let forth = ((A % C) * (B % C)) % C;

  console.log(first);
  console.log(seconde);
  console.log(third);
  console.log(forth);
}
