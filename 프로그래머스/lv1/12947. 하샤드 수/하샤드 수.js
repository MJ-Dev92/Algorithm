function solution(x) {
  var answer = true;
  let sum = String(x).split('').map(x => +(x)).reduce((x, y) => x + y);
    if (x % sum === 0) {
        answer = true;
    } else {
        answer = false;
    }

  return answer;
}