const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(input[0]);

function solution(S) {
  // 알파벳 소문자 => 26 a-z
  // 길이가 26인 배열 answerArray. 배열의 0번째는 a, 배열의 1번째 b
  // b가 나왔을 때 -> answerArray[1] 현재 배열 돌고 있는 index를 넣어주면 된다
  // a가 나왔을 때 -> answerArray[0] 현재 배열 돌고 있는 index를 넣어주면 된다
  // b의 ASCII : 98 - 97 = 1
  // a의 ASCII : 97 - 97 = 0


  let answerArray = new Array(26).fill(-1);

  for (let i = 0; i < S.length; ++i) {
    let nowchar = S[i];
    let answerArrayidx = nowchar.charCodeAt() - 97;

    if (answerArray[answerArrayidx] === -1) {
      answerArray[answerArrayidx] = i;
    } // 중복된 값 입력 방지
  }
  
  //let answer = '';
  for (let i = 0; i < answerArray.length; ++i) {
    //answer += answerArray[i] + ' ';
    process.stdout.write(answerArray[i] + ' ');
  }
}
