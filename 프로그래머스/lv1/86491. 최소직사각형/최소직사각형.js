function solution(a) {
  let w = [];
  let h = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i][0] < a[i][1]) {
      w.push(a[i][1]);
      h.push(a[i][0]);
    } else {
      w.push(a[i][0]);
      h.push(a[i][1]);
    }
  }
  h.sort(function (a, b) {
    return a - b;
  });
  w.sort(function (a, b) {
    return a - b;
  });

  return(h[h.length - 1] * w[w.length - 1]);
};
