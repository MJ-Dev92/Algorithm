function solution(strlist) {
    var answer = [];
    
    for (let i = 0; i < strlist.length; ++i) {
        let num = strlist[i].split('').length;
        answer.push(num);
        
    }
    
    return answer;
}