function solution(s){
    var answer = true;
    let arr = new Array(2).fill(0);
    let strs = s.toUpperCase() 
    // (0,0)
    for (const str of strs) {
        
        if (str === "P") {
            arr[0]++;
        } else if (str === "Y") {
            arr[1]++;
        }
    }

    answer = arr[0] === arr[1]
       

    return answer;
}