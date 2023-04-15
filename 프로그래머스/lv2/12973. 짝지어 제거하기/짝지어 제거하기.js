function solution(s)
{
  let answer = 0;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === arr[arr.length - 1]) {
      arr.pop(arr[arr.length - 1]);
    } else {
      arr.push(s[i]);
    }
  }
  if (arr.length === 0) {
    answer++;
  }
    return answer;
}