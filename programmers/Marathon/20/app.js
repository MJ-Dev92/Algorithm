let s = "Zbcdefg";

solution(s);

function solution(s) {
  var answer = '';

  answer = s.split('').sort().reverse().join('')

  console.log(answer);
}