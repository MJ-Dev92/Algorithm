function solution(a,b,n) {
  let cnt = 0;
  function reducer(a,b,n){
    const received = Math.floor(n/a);
    const receivedMath = Math.floor(n/a) * b; 
    if(n < a) return
    else if(n%a === 0){
      cnt += receivedMath;
      if(receivedMath >= a) {
        reducer(a,b,receivedMath)
      }
    } else {
      cnt += receivedMath;
      if(receivedMath+(n%a) >= a) reducer(a,b,receivedMath+(n%a))
    }
  }
  reducer(a,b,n)
  return cnt
}