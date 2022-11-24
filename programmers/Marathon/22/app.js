// 프로그래머스 숫자 문자열과 영단어

let s = "one4seveneight";

solution(s);

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (let i = 0; i < 10; ++i) {
    let arr = s.split(numbers[i])
    s = arr.join(i);
  }
  console.log(+s);
}