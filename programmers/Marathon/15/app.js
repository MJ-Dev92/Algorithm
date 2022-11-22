// 15번

let arr = [1, 1, 3, 3, 0, 1, 1];
// let arr = [4, 4, 4, 3, 3];

solution(arr);

function solution(arr) {
    const newArr = arr.filter((element, index) => element !== arr[index + 1]);
}


// function solution(arr) {
//   return arr.filter((element, index) => element !== arr[index + 1]);
// }
