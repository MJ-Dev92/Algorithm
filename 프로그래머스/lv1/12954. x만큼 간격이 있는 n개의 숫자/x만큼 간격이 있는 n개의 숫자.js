function solution(x, n) {
    
    let arr = Array.from(Array(n), (_, index) => x * (1 + index));

    return arr
}