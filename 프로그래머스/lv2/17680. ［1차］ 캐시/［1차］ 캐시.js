function solution(cacheSize, cities) {
    const cache = []
    let executeTime = 0
    cities.forEach(city=>{
        const lowerCity = city.toLowerCase()
        if(cache.includes(lowerCity)){
            executeTime += 1
        }
        else{
            executeTime += 5
        }

        if(cacheSize>0){
            if(cache.includes(lowerCity)){
                cache.splice(cache.indexOf(lowerCity),1)
                cache.push(lowerCity)
            }
            else if(cache.length === cacheSize){
                cache.shift()
                cache.push(lowerCity)
            }
            else{
                cache.push(lowerCity)
            }
        }
    })

    return executeTime
}