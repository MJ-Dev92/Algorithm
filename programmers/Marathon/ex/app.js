// 1번 문제

// function solution(arr1){
// 	let answer= "";
//   let count = 0;

//   for (let i = 0; i < arr1.length; ++i) {
//     if (arr1[i] === 0) {
//       count++;
//     }
//   }
//   if (count === 0) {
//     answer = '모'
//   } else if (count === 1) {
//     answer = '도';
//   } else if (count === 2) {
//     answer = '개'
//   } else if (count === 3) { 
//     answer = '걸'
//   } else if (count === 4) {
//     answer = '윷'
//   }
// 	return answer;
// }
// let arr1=[0,0,1,1];
// console.log(solution(arr1))


// 2번 문제

function solution(star){
	// 코드 작성
  let answer = '';

  for (let i = 1; i <= star; ++i) {
    for (let j = star; j > i; --j) {
      answer += ' ';
    }
    for (let k = 0; k < 2 * i - 1; ++k) {
      answer += '*';
    }
    answer += '\n';
  }
	console.log(answer);
}
let star= 9;
solution(star)