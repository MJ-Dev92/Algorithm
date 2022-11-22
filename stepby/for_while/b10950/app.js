const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const testCaseArrey = []
for (let i = 1; i <= input[0]; i++) {
  let tempValue = input[i].split(' ').map((item) => +item);
  testCaseArrey.push({ A: tempValue[0], B: tempValue[1] });
};

solution(+input[0], testCaseArrey)

function solution(T, testCaseArrey) {
  for (let i = 0; i < T; i++) {
    const A = testCaseArrey[i].A;
    const B = testCaseArrey[i].B;
    console.log(A + B);
  }
}
