function solution(board, k) {
    let answer = 0;

    for (let i=0; i<board.length; i++) {
        for (let j=0; j<board[i].length; j++) {
            const sum = i + j;

            if (sum <= k) answer += board[i][j];
        }
    }

    return answer;
}