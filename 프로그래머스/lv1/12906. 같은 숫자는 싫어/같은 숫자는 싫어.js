function solution(a)
{
  let answer = [a[0]];
  for (let i = 1; i < a.length; ++i) {
    if (a[i] !== a[i - 1]) {
      answer.push(a[i]);
    }
  }
  return answer;
}