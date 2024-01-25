function solution(arr, query) {
  query.forEach( (e,i) => {
    if(i%2 === 0) {
      arr = arr.filter((e2,i2)=> i2 <= e)
    } else {
      arr = arr.filter((e2,i2)=> i2 >= e)
    }
  })
  return arr
}