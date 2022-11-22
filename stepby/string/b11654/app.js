const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(char) {
/*   if (char === 'A') {
    console.log(65);
  } else if (char === 'a') {
    console.log(97);
  } else if (char === '0') {
    console.log(48);
  } 
  
원래 이런식으로 작성해야함 하지만 아스키코드 나타내는 메소드를 사용하면 간단하게 한줄로 작성 할 수 있음*/
  console.log(char.charCodeAt());
}
