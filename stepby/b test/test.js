/* const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


let result = '';
let blank = '';
for (let i = 1; i <= input[0]; i++) {
  result += '*';
  for (let j = 0; j < input[0]-i; j++) {
    blank += ' ';
  }
  console.log(blank + result );  
  blank = '';
} */



/* const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');


const [inputN, inputX] = input[0].split(' ').map((item) => +item); 
const arrayA = input[1].split(' ').map((item) => +item);

solution(inputN, inputX, arrayA);

function solution(N, X, A) {
  const answerArray = [];
  for (let i = 0; i < N; ++i) {
    if (A[i] < X) {
      answerArray.push(A[i]);
    }
  }
  console.log(answerArray.join());
} */




/* const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString().split('\n');


for (let i = 1; i <= input[0]; i++){
  console.log(" ".repeat(input[0] - i) + "*".repeat(i));
} */





/* const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(file).toString();

let num = Number(input);

// new Array(num) 배열을 생성해서 fill 메서드로 공백을 채운다.
// [ ' ', ' ', ' ', ' ', ' ' ]
let star = new Array(num).fill(' ');

// 인덱스의 마지막 값(여기선 인덱스4)부터 순서대로 star 배열에 넣는다.
for (let i = num - 1; i >= 0; i--){
  star[i] = "*";
console.log(star.join(''));
} */