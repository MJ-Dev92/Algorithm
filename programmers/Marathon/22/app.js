// 프로그래머스 숫자 문자열과 영단어

let s = "one4seveneight";

solution(s);

function solution(s) {
  const stringToNum = [
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
  for (let i = 0; i < 10; i++) {
    s = s.split(stringToNum[i]).join(i);
  }
  console.log(parseInt(s));
}