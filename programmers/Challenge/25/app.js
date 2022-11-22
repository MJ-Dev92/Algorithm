// 프로그래머스 약수의 개수와 덧셈

function solution(left, right) {
  let answer = 0;
  
  for (let i = left; i <= right; ++i) {
    let count = 0;

    for (let j = 1; j <= right; ++j) {

        if (i % j === 0) {
          count++;
        };
    };

    if (count % 2 === 0) {
      answer += i;
    } else {
      answer -= i;
    };
    
  };
  return answer;
}

let left = 13;
let right = 17;
// let left = 17;
// let right = 27;

solution(left, right)
// console.log(solution(left, right));