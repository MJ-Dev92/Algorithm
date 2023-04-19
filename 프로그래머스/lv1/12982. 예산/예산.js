function solution(d, budget) {
  let answer = 0;
  let sum = 0;
  let sortD = d.sort((a, b) => a - b);

  for (let i = 0; i < sortD.length; ++i) {
    sum += sortD[i];
    if (sum > budget) {
      answer = i;
      break;
    }
  }
  if (sum <= budget) {
    answer = sortD.length;
  }
  return answer;
}