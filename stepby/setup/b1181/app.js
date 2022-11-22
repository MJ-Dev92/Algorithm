const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let num = Number(input.shift(1));

solution(num, input);

function solution(N, input) {

  input.sort((a, b) => {
    if (a.length > b.length) {
      return 1;
    } else if (a.length < b.length) {
      return -1;
    } else {
      return 0;
    }
  });

  const set = new Set(input);
  const arr = [...set];
  
  let result = [];
  for (let i = 1; i <= 50; i++) {
    let sub = arr.filter( x => x.length === i ).sort();
    result.push(...sub);
  }

  result.forEach(elem => {console.log(elem)});
  
}

