// 10번 제일 작은 수 제거하기


let arr = [4, 3, 2, 1];
let arr = [10];

solution(arr);

function solution (arr) {
    const index = arr.indexOf(Math.min(...arr));
    arr.splice(index, 1);
    console.log(arr.length === 0 ? [-1] : arr)
};

function solution (arr) {
    arr.sort((a, b) => b - a);
    arr.pop();

    console.log(arr.length === 0 ? [-1] : arr);
};