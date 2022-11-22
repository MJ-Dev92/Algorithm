const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

const [n, inp, ...nums] = input;
const numbers = nums.map(item => +(item));
const str = inp.split("");

solution(n, str, numbers);

function solution(n, str, numbers) {
  // 알파벳에 해당하는 값을 key - value로 만들어놓자.
  let eng = {};

  // 대문자 A의 ASCII 코드 번호가 65이므로
  // A부터 순차적으로 실행
  for (let i = 0; i < n; ++i) {
    eng[String.fromCharCode(i + 65)] = numbers[i];
  }

  // 조건문 처리를 위해서 연산자만 따로 모아놓는다.
  const operatiors = ["+", "-", "*", "/"];

  // 연산자에 맞게 함수를 만들어놓는다.
  const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
  };

  let stack = [];

  // 만약 str의 원소가 연산자가 아니라면 eng에 있는 value를 가져와서 바꿔준다.
  // 그렇게 알파벳에 해당하는 값을 가진 배열로 변신!
  const numWithStr = str.map((item) => operatiors.includes(item) ? item : eng[item]); 
  
  for (let i = 0; i < str.length; ++i) {
    let singleStr = numWithStr[i];
    
    // 만약 연산자라면 계산 실행
    if (operatiors.includes(singleStr)) {
      let back = stack.pop();
      let front = stack.pop();

      // 연산자에 맞는 함수를 불러온다.
      let calcFunc = calculator[singleStr];
      
      // singleStr을 연산 결과로 바꿔서 stack에 넣는다.
      singleStr = calcFunc(front, back);
    }
    // 연산자가 아니라면 stack에 넣는다.
    stack.push(singleStr);
  }
  // 소수점 아래 2자리까지 표현해야하므로 toFixed 메서드를 사용한다.
  console.log(stack[0].toFixed(2));
}