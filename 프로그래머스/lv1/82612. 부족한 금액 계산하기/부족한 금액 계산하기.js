function solution(price, money, count) {
    var answer = -1;
    
    for (let i = 1; i <= count; ++i) {
        let total = price * i;
        money -= total;
        if (money >= 0) {
            answer = 0; 
        } else {
            answer = Math.abs(money)
        }
    }
    
    return answer;
}