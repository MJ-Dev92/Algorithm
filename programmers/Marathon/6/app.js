// 6번 자릿수 더하기
function solution(n) {
  var answer = 0;
  let splitedN = String(n).split('').map(x => +x).reduce((x, y) => x + y);
  answer = splitedN;

  return answer;
};