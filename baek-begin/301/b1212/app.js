const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input[0]);

function solution(n) {
  let answer = "";
  let arr = "";

  while (n.length >= 2) {
    
    arr = parseInt(n.slice(n.length - 1), 8).toString(2);
    if (arr.length === 1) {
      arr = "00" + arr;
    } else if (arr.length === 2) {
      arr ="0" + arr;
    }
    answer = arr + answer;
    n = n.slice(0, n.length - 1);
  }
  console.log((n ? parseInt(n, 8).toString(2) : "") + answer);
}