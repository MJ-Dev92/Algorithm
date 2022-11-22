const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

/* let result = '';
let blank = '';
for (let i = 1; i <= input[0]; i++) {
  result += '*';
  for (let j = 0; j < input[0]-i; j++){
    blank += ' ';
  };
  console.log(blank + result);
  blank = '';
};
 */


/* let num = +input;

let star = new Array(num).fill(' ');

for (let i = num - 1; i >= 0; i--) {
  star[i] = '*';
  console.log(star.join(''));
}; */

for (let i = 1; i <= input[0]; i++) {
  console.log(' '.repeat(input[0] - i) + '*'.repeat(i));
};