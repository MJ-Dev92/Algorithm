// 1. moves를 순회
// 2. board[i][moves[index]]를 비교, 0이 아니면 stack에 넣고, 해당 값 0으로 변경
// 3. stack[i]와 stack[i-1]을 비교해서 같으면 인형 제거

// board = [
//     [0,0,0,0,0],
//     [0,0,1,0,3],
//     [0,2,5,0,1],
//     [4,2,4,4,2],
//     [3,5,1,3,1]
// ]

// board = [
//     [0,0,0,0,0],
//     [0,0,0,0,0],
//     [0,0,5,0,0],
//     [0,2,4,0,2],
//     [0,5,1,3,1]
// ]


function solution(board, moves) {
    let answer = 0;
    let tempArr = [];

    // 1)
    moves.forEach(e => {
        // 2)
        let selected = select(board, e-1) // 인덱스는 0부터 시작함

        // 3)
        if(selected) {
            tempArr.push(selected);

            if(tempArr[tempArr.length-2] == tempArr[tempArr.length-1]) {
                tempArr.pop();
                tempArr.pop();
                answer += 2;
            }
        }
    })

    return answer;
}

// 인형 뽑기
function select(board, moves_index) {   
    for(let i=0; i<board.length; i++) {
        // 2)
        if(board[i][moves_index] !== 0) {
            let selected = board[i][moves_index];
            board[i][moves_index] = 0;

            return selected;
        }
    }
}