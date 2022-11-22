const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);

function solution (input) {
  // let n = 0;
  // for (let i = 0; i < input.length; ++i) {
  //   n++;
  // }

  // for (let i = 0; i < n; ++i) {
  //   let arr = new Array(4).fill(0);
  //   let char = input[i];
    
  //   for (let j = 0; j < char.length; ++j) {

  //     let nowC = char[j].charCodeAt();

  //     if (nowC >= 48 && nowC <= 57) {
  //       arr[2]++
  //     } else if (nowC >= 65 && nowC <= 90) {
  //       arr[1]++
  //     } else if (nowC >= 97 && nowC <= 122) {
  //       arr[0]++
  //     } else if (nowC === 32) {
  //       arr[3]++;
  //     }

  //   }
  //   console.log(arr.join(" "));
  // }

  const answer = [];
  for (let i = 0; i < input.length; i++) {
    let lower = 0;
    let upper = 0;
    let num = 0;
    let blank = 0;
    for (let j = 0; j < input[i].length; j++) {
      const str = input[i][j];
      if (str === ' ') blank++;
      else if (str === String(+str)) num++;
      else if (str === str.toLowerCase()) lower++;
      else if (str === str.toUpperCase()) upper++;
    }
    answer.push(`${lower} ${upper} ${num} ${blank}`);
  }
  console.log(answer.join("\n"));
}