function solution(s) {
    var answer = 0;
    let sameCount = 0, diffCount = 0, sameStr
    s.split('').forEach((str)=>{
  
        if(sameStr === undefined){
            sameStr = str
            sameCount++
        }

        else if(sameStr === str){
            sameCount++
        }
 
        else{
            diffCount++
        }

        // 처음으로 두 횟수가 같이지는 순간
        if(sameCount === diffCount){
            sameCount = 0
            diffCount = 0
            sameStr = undefined
            answer++
        }
    })
 
    if(sameCount !==0 || diffCount !== 0)
        answer++

    return answer
}