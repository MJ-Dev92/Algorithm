function solution(food) {
    let answer = '';
    const leftFoodSet = food.map((food,idx)=>{
       const sameFoodCount = Math.floor(food/2)
       return idx !== 0 ? String(idx).repeat(sameFoodCount) : ''
    }).join('')
    return leftFoodSet.concat('0').concat(leftFoodSet.split('').reverse().join(''));
}