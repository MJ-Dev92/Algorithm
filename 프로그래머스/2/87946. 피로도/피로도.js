const getPermutations = function (arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); 

    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      const permutations = getPermutations(rest, selectNumber - 1); 
      const attached = permutations.map((el) => [fixed, ...el]); 
      results.push(...attached); 
    });

    return results;
}

function solution(k, dungeons) {
    const dungeonsLength = dungeons.length
    const permutations = getPermutations(Array(dungeonsLength).fill(0).map((_,idx)=>idx),dungeonsLength)
    let answer = -Infinity

    permutations.forEach(permutation=>{
        let piro = k
        let dungeonsCount = 0
        for(let i=0;i<permutation.length;i++){
            const dungeonsIdx = permutation[i]
            if(piro >= dungeons[dungeonsIdx][0]){
                piro -= dungeons[dungeonsIdx][1]
            }
            else{
                break
            }
            dungeonsCount++
        }
        answer = Math.max(answer,dungeonsCount)
    })

    return answer
} 