function solution(number, limit, power) {
    const numberArray = Array(number).fill(0).map((_,idx)=>idx+1)
    const answer = numberArray.map(number=>{
        let divideCount = 0
        for(let i=1;i<Math.sqrt(number);i++){
            (number % i === 0) && divideCount++
        }
        divideCount = (divideCount * 2 + Number.isInteger(Math.sqrt(number)))
        return divideCount > limit ? power : divideCount
    }).reduce((acc,val)=>acc+val,0)
    return answer;
}