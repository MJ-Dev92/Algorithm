function solution(s) {
    var answer = '';
    if (s.length % 2 === 1) {
        let result = Math.round(s.length / 2);
        answer = s[result - 1];
    } else {
        let result = s.length / 2;
        answer = s[result - 1] + s[result];
    }
    return answer;
}