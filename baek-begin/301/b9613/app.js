const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

  let T = input.shift();
  
  solution(T, input);

  function solution(T, input) {


    for (let i = 0; i < T; ++i) {
      let answer = 0;
      let idx = input[i].split(" ");
      let n = idx.shift();
      let arr = idx.map(item => +(item));

      arr.sort((a, b) => b - a);
  
      for (let j = 0; j < n - 1; ++j) {
        for (let k = j + 1; k < n; ++k) {
          answer += getGCD(arr[j], arr[k]);
          
        }
      }
      console.log(answer);
    } 

    function getGCD(a, b) {
      while (b > 0) {
        let tmp = a;
        a = b;
        b = tmp % b
      }
      return a;
    }
  }
