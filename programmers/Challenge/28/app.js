// [프로그래머스] 최대공약수와 최소공배수


function solution(n, m) {
  let answer = [];
  let result = 1;
  for (let i = 2; i < 10000; ++i) {
    while (n % i === 0 && m % i === 0) {
      n /= i;
      m /= i;
      result *= i;
    }
  }
  answer.push(result, n * m * result);
  console.log(answer);
}


let n = 3;
let m = 12;
// let n = 2;
// let m = 5;
solution(n, m);