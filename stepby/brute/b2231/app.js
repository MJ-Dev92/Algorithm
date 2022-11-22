const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(N) {
  let M = 0;

  for (let i = 0; i < N; ++i) {
    let Var = i;
    let StrV = Var.toString();

    let sum = 0
    for (let j = 0; j < StrV.length; ++j) {
      sum += parseInt(StrV[j]);
    }
    
    sum += Var;

    if (sum === N) {
      M = Var;
      break;
    }
  }
  console.log(M);
}


