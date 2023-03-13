function solution(n) {
    let min = n;
    for (let i = n; i >= 1; --i) {
        if (n % i === 1) {
            min = i;
        } 
    } 
    return(min)
}
