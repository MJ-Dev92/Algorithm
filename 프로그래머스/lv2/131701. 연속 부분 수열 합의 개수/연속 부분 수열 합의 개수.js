function solution(elements) {
    let answer = []
    // 배열 2배 확장 
    const extendElements = [...elements,...elements]

    elements.forEach((element,idx)=>{
        if(idx < elements.length ){
            for(let i=0;i<elements.length;i++){
                // 각각의 순회마다 i부터 idx만큼 잘라서 slice 배열을 반환한 값을 push
                const slice = extendElements.slice(i,i+1+idx)
                answer.push(slice.reduce((acc,val)=>acc+val,0))
            }
        }
    })

    // 중복 제거
    const set = new Set(answer)
    return [...set].length;
}