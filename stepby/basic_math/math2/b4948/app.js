const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution (input.map(item => +(item)));

function solution(M) {

  for (let i = 0; i < M.length; ++i) {
    let N = M[i];
    let Dn = 2 * N;
    let answer = 0;

    let arr = Array(Dn + 1).fill(0);
  
    for (let i = 0; i <= Dn; ++i) {
      arr[i] = i; 
    }

    arr[0] = true;
    arr[1] = true;
  
    for (let i = 2; i < Math.sqrt(arr.length); ++i) {
      if (arr[i] !== true) {
        for (let j = i * i; j <= Dn; j += i) {
          arr[j] = true;
        }
      }
    }

    for (let i = N + 1; i <= Dn; ++i) {
      if (arr[i] !== true) {
        answer++;
      }
    }
    
    if (answer !== 0) {
      console.log(answer);
    }
  }
}
