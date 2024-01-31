const bfs = (x,y,n,tried)=>{
    const willVisit = [{checky:y,tried:0}]
    const dp = {}
    let minTried

    while(willVisit.length !== 0){
        const {checky,tried} = willVisit.pop()
        dp[checky] = tried

        if(checky === x){
            minTried = tried
            break;
        }
        if(checky < x){
            break;
        }

        willVisit.unshift({checky:checky-n,tried:tried+1})
        if((checky/2)%1===0 && checky/2 >= x && dp[checky/2] === undefined)
            willVisit.unshift({checky:checky/2,tried:tried+1})
        if((checky/3)%1===0 && checky/3 >= x && dp[checky/3] === undefined)
            willVisit.unshift({checky:checky/3,tried:tried+1})
    }
    return minTried
}

function solution(x, y, n) {
    if(x===y)
        return 0
    const minTried = bfs(x,y,n,0) 
    return minTried !== undefined ? minTried : -1
}