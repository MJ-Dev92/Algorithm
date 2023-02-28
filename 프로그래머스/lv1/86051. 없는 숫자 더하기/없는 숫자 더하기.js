function solution(numbers) {
    let arr = new Array(10).fill(0);
  let answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (arr[numbers[i]] === 0) {
      arr[numbers[i]] = numbers[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      answer += i;
    }
  }
  return (answer);
}