// 프로그래머스 문자열 정렬하기
const strings = ["sun", "bed", "car"];
// const strings = ["abce", "abcd", "cdx"];

const n =  1;
// const n =  2;

solution(strings, n);

function solution(strings, n) {

  strings.sort(function(a, b){
      let first = a[n];
      let second = b[n];

      if(first === second){
          // function(a,b) < 0 이면 a를 b보다 작은 인덱스로 정렬한다.
          //  function(a,b) == 0 이면 a와 b의 순서를 바꾸지 않는다.
          //  function(a,b) > 0 이면 b를 a보다 작은 인덱스로 정렬한다.
          return (a > b) - (a < b); 
      }else{
          return (first > second) - (first < second);
      }
  });
  console.log(strings);
  return strings;
}
