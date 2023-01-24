function solution(num_list) {
    let answer = [];
    let w = 0
    let h = 0
    for (let i = 0; i < num_list.length; ++i) {
        if (num_list[i] % 2 === 0) {
             w += 1  
        } else {
            h += 1
        }
    }
    answer.push(w, h)
    return answer;
}