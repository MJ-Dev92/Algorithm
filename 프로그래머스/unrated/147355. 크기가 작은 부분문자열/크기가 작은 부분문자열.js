function solution(t, p) {
      let strP = p.length - 1;
  let cnt = 0;
  for (let i = 0; i < t.length - strP; i++) {
    if (+t.substring(i, strP + i + 1) <= +p) {
      cnt++;
    }
  }
  return cnt;
}