// 프로그래머스 내림차순으로 배치하기

let s = "Zbcdefg";

solution(s);

function solution(s) {
  var answer = '';

  answer = s.split('').sort().reverse().join('')

  console.log(answer);
}