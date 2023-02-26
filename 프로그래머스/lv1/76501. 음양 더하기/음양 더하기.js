function solution(absolutes, signs) {
    let answer = 0;
  let arr = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] === true) {
      arr.push(+absolutes[i]);
    } else {
      arr.push(-absolutes[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer
}