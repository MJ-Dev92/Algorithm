const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

solution(N, input);

function solution(N, P) {
  // 시간 초과를 방지하기 위해 ans 배열에 답을 담아 join으로 하나의 문자열 출력
  let ans = [];

  for(let i = 0; i < N; ++i) {
    let arr = [];
    // input으로 들어온 하나의 문장을 공백 기준으로 쪼개서 단어 단위로 만듦.
    let str = P[i].split(" ");

    for (let j = 0; j < str.length; ++j) {
      // 하나의 단어를 하나의 알파벳으로 쪼갬.
      // reverse가 배열에 적용되는 메서드이므로, 알파벳 배열로 만들어서 메서드 적용.
      // reverse 후 join을 사용해 단어 단위로 만들어줌.
      let word = str[j].split("").reverse().join("");
      // arr에는 뒤집혀진 단어가 push됨.
      // arr에는 쪼개진 단어들이 원소로 들어가게 됨.
      arr.push(word);
    }
    // 각 단어가 reverse가 되어서 arr에 들어가 있으므로,
    // 그들을 다시 join(" ")해서 하나의 문자열로 만들어줌.
    let newarr = arr.join(" ");

    ans.push(newarr);
  }

  console.log(ans.join('\n'));
}


// 내가 직접 한거
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let N = input.shift();

solution(N, input);

function solution(N, P) {
  let arr = [];
  let ans = [];

  for(let i = 0; i < N; ++i) {
    let word = P[i].split("");

    for (let i = 0; i < word.length + 1; ++i) {

      if (word[i] === ' ' || word.length - 1 < i) {
  
        for (let i = arr.length; i > 0; --i) {
          ans.push(arr.pop(i));
        }
        ans.push(' ');
      } else {
        arr.push(word[i]);
      }
    }
  }
  console.log(ans.join(''));
}