function solution(N, stages) {
    const stagesPerUser = {}
    for(let i=1;i<=N;i++){
        stagesPerUser[i] = 0
    }

    let leaveUser = stages.length
    stages.forEach((stage)=>{
        if(stagesPerUser[stage] !== undefined)
            stagesPerUser[stage]++
    })

    const failRates = []

    Object.entries(stagesPerUser).map(([key,value])=>{
        failRates.push(value / leaveUser)
        leaveUser -= value
    })

    const answer = failRates.map((failRate,idx)=>({failRate,idx}))
                            .sort((a,b)=>b.failRate - a.failRate)
                            .map(({idx})=>idx+1)
    return answer;
}