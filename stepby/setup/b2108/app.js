const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = +input.shift(1);

solution(num, input.map(item => +(item)));

function solution(N, A) {
  let setUp = A.sort((a, b) => a - b);
  let sum = A.reduce((a, b) => a + b);

  const map = new Map();
  let max = 1;

  for (let number of setUp) {
    
    if (map.has(number)) {      
      
      max = Math.max(max, map.get(number) + 1);
      map.set(number, map.get(number) + 1);
    } else map.set(number, 1);
  }

  const maxArr = [];
  let answer3 = 0;

  for (let [key, val] of map) {
    if (val === max) maxArr.push(key);
  }

  if (maxArr.length === 1) {
    answer3 = maxArr[0];
  } else {
    answer3 = maxArr[1];
  }
  // answer += maxArr.length === 1 ? `${maxArr[0]}\n` : `${maxArr[1]}\n`;

  let top = Math.max(...A);
  let bottom = Math.min(...A);

  let answer1 = Math.round(sum / N);
  let answer2 = setUp[Math.round(N / 2 - 1)];
  let answer4 = top - bottom;

  console.log(answer1);
  console.log(answer2);
  console.log(answer3);
  console.log(answer4);
}