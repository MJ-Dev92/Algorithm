// 17번 로또의 최고 순위와 최저 순위


// let lottos = [31, 10, 45, 1, 6, 19];
// let win_nums = [31, 10, 45, 1, 6, 19];

// let lottos = [0, 0, 0, 0, 0, 0]
// let win_nums = [38, 19, 20, 40, 15, 25];

// let lottos = [45, 4, 35, 20, 3, 9];
// let win_nums = [20, 9, 3, 45, 4, 35];


solution(lottos, win_nums);

function solution(lottos, win_nums) {
  let answer = [];
  let max = 0;
  let min = 0;

  for (let i = 0; i < lottos.length; ++i) {
    if (lottos[i] === 0) {
      max++;
    }
    for (let j = 0; j < win_nums.length; ++j) {
      if (lottos[i] === win_nums[j]) {
        max++;
        min++;
      }
    }
  }

  if (max === 6) {
    answer.push(1);
  } else if (max === 5) {
    answer.push(2);
  } else if (max === 4) {
    answer.push(3);
  } else if (max === 3) {
    answer.push(4);
  }else if (max === 2) {
    answer.push(5);
  } else {
    answer.push(6);
  }
  if (min === 6) {
    answer.push(1);
  } else if (min === 5) {
    answer.push(2);
  } else if (min === 4) {
    answer.push(3);
  } else if (min === 3) {
    answer.push(4);
  }else if (min === 2) {
    answer.push(5);
  } else {
    answer.push(6);
  }
  console.log(answer)
}