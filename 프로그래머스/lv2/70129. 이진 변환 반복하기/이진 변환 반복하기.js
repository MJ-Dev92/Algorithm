function solution(s) {
  let answer = [0, 0];
  while (true) {
    if (s !== "1") {
      newS = s.split("0").join("");
      answer[0]++; // 변환 횟수
      answer[1] += s.length - newS.length; // 0 제거 갯수
      s = newS.length.toString(2);
    } else {
      break;
    }
  }
  return answer;
}