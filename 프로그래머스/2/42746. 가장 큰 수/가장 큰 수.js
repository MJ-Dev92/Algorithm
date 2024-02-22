// 1. ab ba 비교
function solution(numbers) {

    let answer_list = [];
    for(let number of numbers)
        answer_list.push(number.toString());
    // 내림차순
    answer_list.sort(function(a,b){
        return (b+a)-(a+b);
    });

    return answer_list.join("")[0] == "0" ? "0" : answer_list.join("");
}

//2. 사전식 정렬을 만들어라 
function solution(numbers) {

    let answer = "";
    let temp = [];

    // why? 4 [12, 1213] 과 같은 예제를 위해서.../ 그런데 1213이 입력으로 들어오면 안되는거 아닌가? 
    // 본래 길이도 저장 해둔다.
    for(let i = 0; i < numbers.length; i++)
        temp.push([numbers[i].toString().length, numbers[i].toString().repeat(4)]) 

    // 4자리까지만 비교한다.
    temp.sort(function(a,b){
        return b[1].substr(0,4)-a[1].substr(0,4); // 내림차순 정렬
    });

    for(let ele of temp){
        answer+=ele[1].substr(0, ele[0])
    }

    return answer[0]=='0'?"0":answer;
}