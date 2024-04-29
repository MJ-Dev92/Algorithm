function solution(n) {
    let dy = [1, 1]
    
    for(let i = 2; i <= n; i++){
        dy[i] = (dy[i-1] + dy[i-2]) % 1000000007;
    }
    
    return dy[n];
}