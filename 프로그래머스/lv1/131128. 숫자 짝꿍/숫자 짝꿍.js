function solution(X, Y) {
    let answer = '';
    const arrX = X.split('')
    const arrY = Y.split('')
    const yObj = {}

    arrX.sort((a,b)=>b-a)

    arrY.forEach((y)=>{
        if(yObj[y] === undefined)
            yObj[y] = 1
        else
            yObj[y]++
    })

    arrX.forEach(x=>{
        if(yObj[x] !== undefined && yObj[x] !== 0){
            yObj[x]--
            answer = answer.concat(x)
        }
    })

    if(answer.length === 0)
        return "-1"
    if(answer[0] === "0")
        return "0"
    return answer
}