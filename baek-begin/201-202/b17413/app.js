const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution(N) {
  let arr = [];
  let ans = [];
  let start = 0;
  let word = N[0].split('');

  for (let i = 0; i < word.length + 1; ++i) {

    if (word[i] === '<') {
      for (let el of arr) {
        ans.push(arr.pop(el));
      }
      start = 1;
    }

    if (start === 1) {
      arr.push(word[i]);
      if (word[i] === '>') {
        start = 0;
        for (let i = arr.length; i > 0; --i) {
          ans.push(arr.shift());
        }
      }

    } else {

      if (word[i] === ' ' || word.length - 1 < i) {

        for (let i = arr.length; i > 0; --i) {
          ans.push(arr.pop(i));
        }
        ans.push(' ');
      } else {
        arr.push(word[i]);
      }

    }
  }
  console.log(ans.join(''));
}