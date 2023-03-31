function solution(hp) {
    let answer = 0;
  let cnt = [5, 3, 1];
  for (let i = 0; i < cnt.length; i++) {
    answer += Math.floor(hp / cnt[i]);
    hp -= Math.floor(hp / cnt[i]) * cnt[i];
  }
    return answer;
}