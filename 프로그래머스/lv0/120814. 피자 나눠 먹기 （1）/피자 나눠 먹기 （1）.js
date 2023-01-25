function solution(n) {
    var answer = 0;
    
    let cnt = 1
    
    while (n > cnt * 7) {
        cnt++
    }
    
    answer = cnt
    
    return answer;
}