function solution(n, k) {
    var answer = [];
    for (let i = 1; i <= n; ++i) {
        let num = k * i;
        if (num <= n) {
            answer.push(num); 
        }
    }
    return answer;
}