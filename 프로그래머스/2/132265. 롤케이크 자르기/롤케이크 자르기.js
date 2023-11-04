function solution(topping) {
    let answer = 0;
    const topping1 = {} , topping2 = {} 
    let topping1Count = 0,topping2Count = 0

    // topping2에 전부 세팅 
    topping.forEach((element)=>{
        if(topping2[element] === undefined){
            topping2[element] = 1
            topping2Count++
        }
        else{
            topping2[element]++
        }
    })

    // 순서대로 자르기 진행하면서 topping2에서 topping들 topping1으로 옮기기 
    topping.forEach((element)=>{
        if(topping2[element]-1 === 0){
            topping2Count--
            delete topping2[element]
        }
        else{
            topping2[element]--
        }

        if(topping1[element] === undefined){
            topping1Count++
            topping1[element] = 1
        }
        else{
            topping1[element]++
        }

        answer += (topping1Count===topping2Count)
    })

    return answer;
}