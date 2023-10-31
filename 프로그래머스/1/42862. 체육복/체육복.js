function solution(n, lost, reserve) {
    lost.sort((a,b)=>a-b)

    lost.forEach((lostPersonIdx,idx)=>{
        if(reserve.includes(lostPersonIdx)){
            const reserveIdx = reserve.indexOf(lostPersonIdx)
            reserve[reserveIdx] = null
            lost[idx] = null
        }
    })

    lost.forEach((lostPersonIdx,idx)=>{
        if(reserve.includes(lostPersonIdx-1)){
            const reserveIdx = reserve.indexOf(lostPersonIdx-1)
            reserve[reserveIdx] = null
            lost[idx] = null
        }
        else if(reserve.includes(lostPersonIdx+1)){
            const reserveIdx = reserve.indexOf(lostPersonIdx+1)
            reserve[reserveIdx] = null
            lost[idx] = null
        }
    })

    const lostPerson = lost.filter(lostPersonIdx=>lostPersonIdx).length
    const answer = n-lostPerson

    return answer
}