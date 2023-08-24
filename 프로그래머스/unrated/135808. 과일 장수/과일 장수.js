function solution(k, m, score) {
let answer = 0;
const scoreConst = score.sort(function(a, b){return b - a});

for (let i = m-1 ; i < scoreConst.length ; i += m) {
answer += scoreConst[i] * m;
}

return answer;
}