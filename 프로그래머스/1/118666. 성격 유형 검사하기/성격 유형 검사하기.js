function solution(survey, choices) {
    // 각 항목 당 하나씩만 잡고 점수 계산 시작
    // 0 또는 양수인 경우 변수명 그대로 반환
    // 음수인 경우 R -> T, C -> F, J -> M, A -> N
    let R = 0;
    let C = 0;
    let J = 0;
    let A = 0;

    // 설문 하나당 반복
    survey.forEach((i,idx) => {
        const target = i[0];

        // 선택 점수 산출은 -4의 값을 해둔 뒤
        choices[idx] = -(choices[idx]-4);

        if(target==="R"||target==="T"){
            
            if(target==="R"){
                // 앞의 값이 변수와 일치하는 경우 변수에 값을 그대로 더해준다.
                R = R+choices[idx];
            }else{
                // 앞의 값이 변수의 반대인 경우 변수에서 값을 빼준다.
                R = R-choices[idx]
            }
            return ;
        }

        if(target==="C"||target==="F"){
            
            if(target==="C"){
                C = C+choices[idx];
            }else{
                C = C-choices[idx]
            }
            return ;
        }
        if(target==="J"||target==="M"){
            
            if(target==="J"){
                J = J+choices[idx];
            }else{
                J = J-choices[idx]
            }
            return ;
        }

        if(target==="A"||target==="N"){

            if(target==="A"){
                A = A+choices[idx];
            }else{
                A = A-choices[idx]
            }
            return ;
        }
    });

    // 각각의 값이 0 이상인지 판별 후 그렇다면 변수명대로 그렇지 않다면 반대로 출력한다.
    return `${R>=0?"R":"T"}${C>=0?"C":"F"}${J>=0?"J":"M"}${A>=0?"A":"N"}`

}