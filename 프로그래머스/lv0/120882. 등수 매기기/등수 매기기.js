function solution(score) {
  let answer = [];
  let cnt = 1;
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      if (score[i][0] + score[i][1] < score[j][0] + score[j][1]) {
        cnt++;
      } else if (score[i][0] + score[i][1] === score[j][0] + score[j][1]) {
        continue;
      }
    }
    answer.push(cnt);
    cnt = 1;
  }
    return answer;
}