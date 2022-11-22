const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const num = input[0] * 1;
const items = input.slice(1);

solution(num, items);

function solution(N, item) {

  for (let i = 0; i < N; i++) {

    const OXList = item[i];
    let oCnt = 0;
    let score = 0;

    for (let j = 0; j < OXList.length; j++) {

      const Oorx = OXList[j];
      
      if (Oorx === 'O') {
        oCnt++;
        score += oCnt;
      } else {
        oCnt = 0;
      }
    }
    console.log(score);
  }
}