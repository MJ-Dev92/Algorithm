const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let NS = input[0].split(' ').map(item => +(item));
let distance = input[1].split(' ').map(item => +(item));

solution(NS[0], NS[1], distance)

function solution(N, S, Dt) {
  const D = []

  function getGCD(a, b) {
    while (b > 0) {
      let r = a;
      a = b;
      b = r % b;
    }
    return a;
  }

  for (let i = 0; i < N; ++i) {
    let nD = Dt[i];
    D.push(Math.abs(nD - S));
  }
  
  let tmp = getGCD(D[0], D[1]);
  if (D.length === 1) {
    console.log(String(D));
  } else if (D.length === 2) {
    console.log(String(tmp));
  } else {
    for (let i = 2; i < D.length; ++i) {
      tmp = getGCD(tmp, D[i]);
    }
    console.log(String(tmp));
  }
}