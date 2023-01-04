function solution(n) {
    var answer = 0;
    let s = Math.pow(n, 1/2);
    
    if (Number.isInteger(s)) {
        answer = (Math.pow(s + 1, 2));
    } else {
        answer = -1
    }
    return answer;
}