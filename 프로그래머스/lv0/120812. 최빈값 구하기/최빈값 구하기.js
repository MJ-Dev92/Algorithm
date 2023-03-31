function solution(array) {
    var answer = 0;
    let arr= Array(1000).fill(0)
    
    for (let i = 0; i < array.length; ++i) {
        let num = array[i]
        // 1,2,3,3,3,4
        if (arr[num] === 0) {
            arr[num] = 1;
        } else {
            arr[num]++ 
        }
    }
    let max = 0;
    let Dupilcated = false
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== max) {
            if (arr[i] > max) {
            max = arr[i];
            answer = i;
            Dupilcated = false
            }
        } else {
            Dupilcated = true
        }
    }
    if (Dupilcated) {
        answer = -1
    }
    return answer;
}