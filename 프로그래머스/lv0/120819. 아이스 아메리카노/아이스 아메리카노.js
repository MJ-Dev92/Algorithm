function solution(money) {
    let cut = Math.floor(money / 5500);
    let etc = money % 5500;
    var answer = [cut, etc];
    return answer;
}