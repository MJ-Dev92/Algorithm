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
  return answer
}