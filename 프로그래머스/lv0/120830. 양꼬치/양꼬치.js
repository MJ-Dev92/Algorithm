function solution(n, k) {
    let answer = 0;
    let pricen = 12000
    let pricek = 2000
    let kcnt = Math.floor(n / 10)
    
    answer = (pricen * n) + ((k - kcnt) * pricek)
    
    return answer;
}