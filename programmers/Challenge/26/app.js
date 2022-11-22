// 프로그래머스 약수의 합

function solution(n) {
  var answer = 0;
  let sum = 0
  
  for (let i = 1; i <= n; ++i) {
      if (n % i === 0) {
          sum += i
      }
  }
  answer = sum
  return answer;
}
let n = 3;
let m = 12;
// let n = 2;
// let m = 5;
solution(n, m);

