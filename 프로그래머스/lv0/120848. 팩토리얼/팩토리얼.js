function solution(n) {
    var answer = 0;
    let k = 1;
    for (let i = 1; i <= 100; ++i) {
        k += k * i;
        if (k === n) {
            answer += i + 1;
            break;
        } else if (k > n) {
            answer += i;
            break;
        }   
    }
    return answer;
}