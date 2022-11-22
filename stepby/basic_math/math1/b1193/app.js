const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

/* 
  1 = (0, 0)      1 그룹

  2 = (0, 1)      2 그룹
  3 = (1, 0)

  4 = (2, 0)      3 그룹
  5 = (1, 1)
  6 = (0, 2)
*/

function solution(N) {
  let count = 1;      // 그룹을 나타낸다

  while (true) {
    N -= count;
    if (N <= 0) {
      N += count;
      break;
    }
    count++;
  }

  if (count % 2 === 0) {
    console.log(N + '/' + (count - N + 1));
  } else {
    console.log((count - N + 1) + '/' + N );
  }
}
