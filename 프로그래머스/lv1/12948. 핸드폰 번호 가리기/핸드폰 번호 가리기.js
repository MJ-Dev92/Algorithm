function solution(phone_number) {
    let numb = "";
    for (let i = 0; i < phone_number.length - 4; i++) {
        numb += "*";
    }
    for (let i = phone_number.length - 4; i < phone_number.length; i++)     {
        numb += phone_number[i];
    }
    return numb;
}