//1번문제 2016년 문제

let a = 5;
let b = 24;

solution(a, b);

function solution(a, b) {
    let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let day = week[new Date(`2016-${a}-${b}`).getDay()];
    
    console.log(day)
}