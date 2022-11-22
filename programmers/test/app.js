// // let month = 11;
// let month = 6;
// // let day = 27;
// let day = 22;

// solution(month, day);

// function solution(month, day) {
//   // 더해줘야하는 일수
//   let days = Number(98);
//   // 현재 날짜
//   let date = `2022-${month}-${day}`;

//   // new Date() 생성자 함수 사용
//   let answer = new Date(date);
//   // getDate() 메서드 사용 하여 days를 더해준다
//     answer.setDate(answer.getDate() + days);

//   // getMonth 메서드를 사용 Month값만 가져와준다.   
//   // 월이 -1이 되어 출력된다 이유는 모른다 나중에 알아보자
//   let getMonth = answer.getMonth() + 1;
//   // getDate를 사용하여 date값만 가져와준다
//   let getdate = answer.getDate()

//   // 템플릿 리터럴을 이용해 출력
//   console.log(`${getMonth}월 ${getdate}일`);
// }

// ## 2번. 몇시간 했더라? (중)

// 지용이는 항해에서 한 주 동안 공부 기록을 남길 알고리즘을 만들어보기로 결심했다.
// 항해의 체크인 페이지에는 몇가지 조건이 있는데 이를 만족하는 알고리즘을 만들어보자.

// - 체크인과 체크아웃은 항상 정시에 진행한 것으로 가정한다.
// - 체크아웃을 할 때 익일 시간은 24+a 로 계산한다. 즉 새벽 2시는 24+2 인 26으로 표기한다.
// - 체크인 페이지는 체크아웃이 새벽 5시 정각이나 새벽 5시를 넘어가면 체크아웃을 깜빡한 것으로 간주한다.
// 따라서 새벽 5시가 넘어가 체크아웃을 하게 되면 자동으로 체크아웃을 오후 9시(21시)로 한 것으로 처리한다.

// ### 제한 조건

// - 체크인(checkin)과 체크아웃(checkout)을 진행한 시간이 담긴 배열 두 개가 주어진다.
// - 각 배열에는 월요일부터 일요일까지 체크인/아웃을 한 시간이 담겨있다.
// - checkin과 checkout 배열의 길이는 각각 7 이다.

// let arr = [9,9,8,8,7,8,9]; // 58
// let arr1 = [21,25,30,29,22,23,30]; // 96 12 16 13 13 15 15 12

// let arr = [9,7,8,9,7,8,9];
// let arr1 = [23,22,26,26,29,27,22]; // 110

// let arr = [9,9,9,9,7,9,8];
// let arr1 = [23,23,30,28,30,23,23]; // 102


// function solution(arr1, arr2){
// 	let answer = 0;

//   let sumArr1 = arr1.reduce((e, a) => e + a);
//   let sumArr2 = 0;

//   for (let i = 0; i < arr2.length; ++i) {
//     if (arr2[i] >= 29) {
//       arr2[i] = 21;
//       sumArr2 = arr2.reduce((e, a) => e + a);
//     }
//   }
//   return sumArr2 - sumArr1;
// }

// let arr1=[9, 9, 9, 9, 7, 9, 8];
// let arr2=[23, 23, 30, 28, 30, 23, 23];
// console.log(solution(arr1, arr2))



// ## 3번. 소수의 개수와 덧셈 (상)

// ### **문제 설명**

// 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. str에 나타나는 숫자 중 소수의 최대값과 소수가 아닌 수의 최소값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하세요.

// 예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

// ---

// ### 제한사항

// - s에는 둘 이상의 정수가 공백으로 구분되어 있습니다.
// - 문자열에는 소수가 한개 이상 섞여 있습니다.
// - 문자열에는 소수가 아닌 수가 한개 이상 섞여 있습니다.
// - 음수는 없습니다.

// let s = "2 3 4 5" // "4 5"
// let s = "15 3 10 9 7 8" // "8 7"
// let s = "97 75 88 99 95 92 73" // "75 97"
// solution(s);


// function solution(s){
// 	let answer="";
//   let splitedS = s.split(' ');
//   let num = [];

//   for (let i = 0; i < splitedS.length; ++i) {
//     for (let j = 2; j < splitedS[i]; ++j) {
//       if (splitedS[i] % j === 0) {
//         num.push(splitedS[i]);
//         splitedS.splice(i, 1);
//       } 
//     }
//   }
//   return  answer = String(Math.min(...num)) + " " + String(Math.max(...splitedS));

// }
// let s = "97 75 88 99 95 92 73";
// console.log(solution(s))