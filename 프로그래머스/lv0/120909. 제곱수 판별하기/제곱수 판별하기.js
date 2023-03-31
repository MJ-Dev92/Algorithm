function solution(n) {
    var answer = 0;
    let result = 0;
    for (let i = 2; i < n; ++i) {
        if (n / i === i) {
            result = 1;
        }
    }
    if (result === 0) {
         answer = 2;
    } else {
        answer = 1;
    }    
    return answer;
}