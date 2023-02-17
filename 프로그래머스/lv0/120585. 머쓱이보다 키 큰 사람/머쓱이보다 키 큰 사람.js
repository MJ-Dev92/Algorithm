function solution(array, height) {
    let answer = 0;
    let result = 0;
    
    for (let i = 0; i < array.length; ++i) {
        if (array[i] > height) {
            result += 1
            
        }
    }
    answer = result;
    return answer;
}