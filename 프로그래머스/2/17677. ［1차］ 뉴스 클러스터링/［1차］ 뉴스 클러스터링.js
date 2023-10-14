const splitTwoWords = (str)=>{
    const splitedStr = str.split('')
    const splitedTwoWords = splitedStr.map((v,idx)=>v+splitedStr[idx+1])
    return splitedTwoWords.slice(0,splitedTwoWords.length - 1)
}

const filterEnglishWords = (words)=>{
    return words.filter(word=>word.replace(/[^a-zA-Z]/gi,'').length === word.length).map(word=>word.toLowerCase())
}

function solution(str1, str2) {
    const twoWords1 = filterEnglishWords(splitTwoWords(str1))
    const twoWords2 = filterEnglishWords(splitTwoWords(str2))

    const twoWordsObj1 = {}
    const twoWordsObj2 = {}
    const gathering = {}
    let union = 0

    twoWords1.forEach((word)=>{
        if(twoWordsObj1[word] === undefined){
            twoWordsObj1[word] = 1
        }
        else{
            twoWordsObj1[word]++
        }
    })

    twoWords2.forEach((word)=>{
        if(twoWordsObj2[word] === undefined){
            twoWordsObj2[word] = 1
        }
        else{
            twoWordsObj2[word]++
        }
    })

    Object.entries(twoWordsObj1).forEach(([key,value])=>{
        if(gathering[key] === undefined){
            if(twoWordsObj1[key] && twoWordsObj2[key]){
                gathering[key] = Math.max(twoWordsObj1[key] , twoWordsObj2[key])
                union += Math.min(twoWordsObj1[key] , twoWordsObj2[key])
            }
            else {
                gathering[key] = twoWordsObj1[key]
            }
        }
    })

    Object.entries(twoWordsObj2).forEach(([key,value])=>{
        if(gathering[key] === undefined){
            if(twoWordsObj1[key] && twoWordsObj2[key]){
                gathering[key] = Math.max(twoWordsObj1[key] , twoWordsObj2[key])
                union += Math.min(twoWordsObj1[key] , twoWordsObj2[key])
            }
            else {
                gathering[key] = twoWordsObj2[key]
            }
        }
    })

    const intersection = Object.values(gathering).reduce((acc,val)=>acc+val,0)
    const answer = Math.floor(union / intersection * 65536)
    return isNaN(answer) ? 65536 : answer
}
