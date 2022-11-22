const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');


const items = input.map((item) => +item);

solution(items);

function solution(item) {
  const answer = Array(42).fill(0);

  for (let i = 0; i < items.length; ++i) {
    const items = item[i] % 42;
    answer[items]++
  }
  
  let cnt = 0;
  for (let i = 0; i < answer.length; ++i) {
    if (answer[i] !== 0) {
      cnt++
    }
  }
  console.log(cnt);
}



/* const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
	
const count = new Set(input.map(x => x % 42)).size;
    
console.log(count);




let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const userNum = [];

input.forEach(x => {
     const num = x % 42;
    
    if (userNum.indexOf(num) === -1) {
        userNum.push(num);
    }
});

console.log(userNum.length); */