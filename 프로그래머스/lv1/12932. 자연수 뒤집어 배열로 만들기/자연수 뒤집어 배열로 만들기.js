function solution(n) {
    var answer = [];
    let splitedN = String(n).split('')

    for (let i = splitedN.length - 1; i >= 0; --i) {
        answer.push(+splitedN[i])
    }
    return(answer)
}