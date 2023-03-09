function solution(numbers) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < numbers.length; ++i) {

    for (let j = i + 1; j < numbers.length; ++j) {
      arr.push(numbers[i] + numbers[j]);
    }
  }
  
  arr.forEach((element) => {
    if (!answer.includes(element)) {
      answer.push(element);
    }
  });
  return (answer.sort((a, b) => a - b));
}
