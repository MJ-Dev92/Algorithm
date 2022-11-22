// 프로그래머스 소수 만들기


// let num = [1, 2, 3, 4];
let num = [1, 2, 7, 6, 4];

solution(num);

function solution(nums) {
  var answer = 0;

//     3개 더한 값 A 처리 전체 합(처리한 숫자가 다시 나오지 않게 해야 함)
//     전체합
  for  (let i =0; i < nums.length - 2; i ++){
      for (let j = i + 1; j < nums.length -1; j++){
          for (let z = j + 1; z < nums.length; z++){
//     전체합의 약수의 개수가 2이면 소수이므로, 답안으로 할당
                  if (division(nums[i] + nums[j] + nums[z]) === 2){
                      answer += 1
                  }
                  
              }
          }
      }

  return answer
}


// num의 약수의 개수를 리턴하는 함수. 약수가 2일 경우에 소수.
function division(num){
  let count = 0 
  for (let i = 0; i <= num; i++){
      if ( num % i === 0){
          count += 1
      }
  }
  return count
}
