function solution(name, yearning, photo) {
    return photo.map(group=>group.reduce((acc,val)=>{
        const yearnScore = yearning[name.indexOf(val)] || 0
        return acc+yearnScore
    },0))
}