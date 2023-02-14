function solution(my_string, letter) {
    var answer = '';
    
    let str = my_string.split('');
    
    for (let i = 0; i < str.length; ++i) {
        if (str[i] !== letter) {
          answer += str[i];
        }
    }
    return answer;
}