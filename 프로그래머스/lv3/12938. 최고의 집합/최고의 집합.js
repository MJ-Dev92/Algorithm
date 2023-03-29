function solution(n, s) {
  let answer = [];
  let count = s % n;
  if (n > s) {
    answer.push(-1);
  } else if (s % n >= 1) {
    answer.push(parseInt(s / n));
    for (let i = 1; i < n; ++i) {
      if (n - i === count) {
        answer.push(parseInt(s / n + 1));
        count--;
      } else {
        answer.push(parseInt(s / n));
      }
    }
  } else if (s % n === 0) {
    for (let i = 0; i < n; ++i) {
      answer.push(parseInt(s / n));
    }
  }
  return answer;
}