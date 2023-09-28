function solution(progresses, speeds) {
    var answer = [];
    const developAccesses = progresses.map((progress,idx)=> Math.ceil((100 - progress) / speeds[idx]))

    let developedDay = developAccesses[0], developedDayCount = 0
    developAccesses.forEach(developAccess=>{
        if(developedDay >= developAccess){
            developedDayCount++
        }
        else{
            developedDay = developAccess
            answer.push(developedDayCount)
            // 현재 developAccess는 배포되지 못했으므로 이를 포함해서 1로 세팅
            developedDayCount = 1
        }
    })

    // 마지막 남은 배포 적용 
    if(developedDayCount){
        answer.push(developedDayCount)
    }

    return answer;
}