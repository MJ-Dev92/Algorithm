function solution(s) {
    const tuples = []
    s.slice(2,s.length-2).split('},{').forEach(tupleString=>{
        const tuple = tupleString.split(',').map(str=>Number(str))
        tuples.push(tuple)
    })

    tuples.sort((a,b)=>a.length - b.length)

    const answer = []
    tuples.forEach(tuple=>{
        tuple.forEach(num=>{
            if(!answer.includes(num)){
                answer.push(num)
            }
        })
    })
    return answer
}