// 프로그래머스 예산


function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (const department of d) {
    if (budget < department) break;
    answer += 1;
    budget -= department;
  }
  return answer;
}

// function solution(d, budget) {
//   let answer = 0;
//   let sortD = d.sort();
//   let max = 0;

//   for (let i = 0; i < sortD.length; ++i) {

    
//     let sum = sortD[i];
//     let arr = [sortD[i]];

//     for (let j = i + 1; j < sortD.length; ++j) {

//       sum += sortD[j];
//       arr.push(sortD[j]);
//       if (sum > budget) {
//         continue;
//       }  
      
//       if (sum === budget) {
//         if (arr.length > max) {
//           max = arr.length;
//           answer = arr;
//           return (answer.length)
//         }
//       }  
//     }  
//   }
// }

let d = [1, 3, 2, 5, 4];
let budget = 9;
// let d = [2, 8, 2, 1, 3, 3, 5, 4, 2, 5];
// let budget = 20;
solution(d, budget)


// function solution(d, budget) {
//   let answer = '';
//   let sortD = d.sort();

//   for (let i = 0; i < sortD.length; ++i) {

//     let sum = sortD[i];
//     let arr = [sortD[i]];
//     for (let j = i + 1; j < sortD.length; ++j) {

//       sum += sortD[j];
//       arr.push(sortD[j]);
//       if (sum > budget) {
//         continue;
//       }  
//       if (sum === budget) {
//         answer = arr;
//         break;
//       }  
//     }  
//     if (sum === budget) {
//       answer = arr;
//       break;
//     } 
//   }
//   return (answer.length);
// }


