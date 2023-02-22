function solution(a) {
  let count = 0;
  function cola(b) {
    if (count > 499) return -1;
    if (b === 1) return count;
    count++;
    b % 2 === 0 ? cola(b / 2) : cola(b * 3 + 1);
  }
  cola(a);
  return count > 499 ? -1 : count;
}