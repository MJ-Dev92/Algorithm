// 3번 문제 수박수박수박?

let n = 4;

solution(n);

function solution(n) {
    let answer = ''

    for (let i = 1; i <= n; ++i) {
        
        if (i % 2 === 0) {
            answer += '박';
        } else {
            answer += '수';
        };
    };
    console.log(answer);
};