// 11번 콜라츠 추측

let n = 6;	
// let n = 16;	
// let n = 626331;	

solution(n);

function solution(num) {
    let count = 0;
    let n = num;


    while (count < 501) {
        if (n === 1) {
            break;
        };

        if (n % 2 === 0 && n !== 0) {
            n = n / 2;
            count++;
        } else {
           n = n * 3 + 1
            count++
        };
    };

    if (count >= 500) {
        console.log(-1);
    } else {
        console.log(count);
    };
};