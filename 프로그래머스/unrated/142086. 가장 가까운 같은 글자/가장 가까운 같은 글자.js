function solution(s) {
    let result = [];
    let tmp = {};
    [...s].forEach((char,i)=>{
        if(tmp[char] != undefined) {
            console.log(char, i, i- tmp[char]);
            result.push(i- tmp[char]);
            tmp[char] = i;
        } else {
            result.push(-1);
            tmp[char] = +i;
        }
    })
    return result;
}