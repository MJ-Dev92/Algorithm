//  5번 이상한 문자 만들기

let s = "try hello world"
// let s = "  tRy hello  WORLD    "
// let split = s.trim().split(' ')

// console.log(split[0]);

solution(s);

function solution(s) {
    var answer = '';
    let splitedS = s.trim().split(' ')

    // for (let i = 0; i < splitedS.length; ++i) {
    //     let char = splitedS[i];
    //     console.log(char[1]);
    // }
    for (let i = 0; i < s.length; ++i) {

        if (i % 2 === 0) {
            if(s[i].charCodeAt() > 96) {
                let num = s[i].charCodeAt() - 32;
                answer += String.fromCharCode(num);
            } else {
                answer += s[i];
            };
            
        } else {
            if (s[i].charCodeAt() > 64 && s[i].charCodeAt() < 91) {
                let num = s[i].charCodeAt() + 32;
                answer += String.fromCharCode(num);
            } else {
                answer += s[i];
            };
        };
    };
    console.log(answer)
    return answer;
};