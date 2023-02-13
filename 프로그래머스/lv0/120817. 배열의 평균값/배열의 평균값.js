function solution(numbers) {
    let answer = 0;
    
    let sum = 0;
    for (let i = 0; i < numbers.length; ++i) {
        sum += numbers[i]
        
    }
    let result = sum / numbers.length
    answer = result.toFixed(1)
     return answer;
    
}