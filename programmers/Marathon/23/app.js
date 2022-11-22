let s = "AB";
// let s = "z";
// let s = "a B z";

let n = 1;
// let n = 1;
// let n = 4;

solution(s, n)


function solution(s, n) {
  let answer = "";

  for (let i = 0; i < s.length; ++i) {
    let char = s[i].charCodeAt();

    if (char !== 32) {

      if (char <= 90 && char >= 65) {
        char += n;
        if (char > 90) {
          char -= 26;
        }
      } 
      if (char <= 122 && char >= 97) {
        char += n
        if (char > 122) {
          char -= 26;
        }
      }
    }
    answer += String.fromCharCode(char); 
  }
  console.log(answer);
}