// 13번 3진법 뒤집기

// let n = 45;
let n = 125;

solution(n);

function solution(n) {
    let samjinsu = parseInt(n.toString(3).split('').reverse().join(''), 3);

    console.log(samjinsu);
}
