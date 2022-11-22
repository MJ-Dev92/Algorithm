const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let nums = input[0].split(" ").map(item => +(item));

solution(nums[0], nums[1]);

function solution(n, m) {
  function getpowerN(num, power) {
    let count = 0;

    while (num >= power) {
      count += parseInt(num / power);
      num /= power;
    }
    return count;
  }

  const two = getpowerN(n, 2) - getpowerN(n - m, 2) - getpowerN(m, 2);
  const five = getpowerN(n, 5) - getpowerN(n - m, 5) - getpowerN(m, 5);

  console.log(Math.min(two, five));
}