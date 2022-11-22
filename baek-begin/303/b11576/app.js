const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n').map(v => v.split(" ").map(Number));

let [A, B] = input[0];
let N = input[1];
let nums = input[2].reverse();

solution(A, B, N, nums);

function solution(A, B, N, nums) {
  const answer = [];
  let DEC = 0;

  for(let i = 0; i<N; i++){
    DEC+=nums[i]*(A**i)
  }

  if(DEC==0){
    console.log(0)
  }else{

    while(DEC>0){
      answer.unshift(DEC%B);
      DEC = Math.floor(DEC/B)
    }
    console.log(answer.join(' '))
  }
}