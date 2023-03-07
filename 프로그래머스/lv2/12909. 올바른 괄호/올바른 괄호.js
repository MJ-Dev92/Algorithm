function solution(s){
    let answer = false;
    let arr = [];
    let status = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] === '(') {
            arr.push(s[i]);
        } else if (s[i] === ')') {
            if (arr.length !== 0) {
                arr.pop();
            } else {
                status = 1;
            }
        }
    }
    if (status === 0) {
        if (arr.length === 0) {
            answer = true;
        } else {
            answer = false;
        }
    }
    return answer;
}