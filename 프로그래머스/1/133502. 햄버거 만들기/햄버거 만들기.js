function solution(ingredient) {
    let answer = 0;
    let count = 0;
    // 1)
    let temp = [];

    // 2)
    for(let i=0; i<ingredient.length; i++) {
        temp.push(ingredient[i]);

        // 3)
        if(temp.slice(-4).join('') == '1231') { // 최신값에서 4개씩 확인 [ 2, 1, 1, 2 ] => [ 1, 1, 2, 3 ] => [ 1, 2, 3, 1 ]
            count += 1;

            // 4)
            temp.splice(-4);
        }
    }

    return count;
}