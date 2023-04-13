function solution(a) {
    let answer = 0;
  let binA = a.toString(2).replace(/0/g, "");
  for (let i = a + 1; i < 1000000; i++) {
    if (i > a) {
      let bin = i.toString(2).replace(/0/g, "");
      if (bin === binA) {
        answer = i;
        break;
      }
    }
  }
  return answer
}