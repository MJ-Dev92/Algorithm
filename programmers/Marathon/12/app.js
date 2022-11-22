// 12번 하샤드 수

let arr = 10;
let arr = 12;
let arr = 11;
let arr = 13;

solution(arr)

function solution(x) {
    var answer = true;
    let sum = String(x).split('').map(x => +(x)).reduce((x, y) => x + y);

    if (x % sum === 0) {
        answer = true;
    } else {
        answer = false;
    };

    console.log(answer);
};