// 16번 두 개 뽑아서 더하기

// let numbers = [2, 1, 3, 4, 1]; // [2,3,4,5,6,7]
let numbers = [5,0,2,7]; // [2,5,7,9,12]

solution(numbers);

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
  console.log(answer.sort((a, b) => a - b));
}