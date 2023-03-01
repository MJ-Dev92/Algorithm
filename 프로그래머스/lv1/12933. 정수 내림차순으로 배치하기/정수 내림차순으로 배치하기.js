function solution(n) {
    var answer = 0;
    let srt = String(n).split('').sort((a, b) => b - a);
    answer = Number(srt.join(''))

    return answer;
}