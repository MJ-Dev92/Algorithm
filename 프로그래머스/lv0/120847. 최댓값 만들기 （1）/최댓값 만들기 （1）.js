function solution(numbers) {
    let answer = 0;
    let num = numbers.sort(function (a, b) {
        return a - b;
    });
    answer = num[num.length - 2] * num[num.length - 1];
    return answer
}