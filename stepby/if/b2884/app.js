const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input[0].split(' ').map((item) => +item);

solution(input[0], input[1]);

function solution(H, M) {
  M -= 45;
  
  if(M < 0) {
    if(H != 0) {
      M += 60,
      H -= 1;
    } else {
      H = 23;
      M += 60
    }
  }
  console.log(H, M);
};


