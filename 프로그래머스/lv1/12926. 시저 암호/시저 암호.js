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
  return (answer);
}