// 1. board를 2차원 배열로 만들어주기
// 2. 2*2 블록 찾기
// 3. 터뜨릴 블록 0으로 변경
// 4. 블록 내리기
// 5. 터진 블록 수 계산

function solution(m, n, board) {
    let answer = 0;

    // 1)
    board = board.map(e => e.split(''));

    while (true) {
        let block = [];

        // 2)
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                let current = board[i][j];

                if (current && current === board[i][j + 1] && current === board[i + 1][j] && current === board[i + 1][j + 1]) {
                    block.push([i, j]);
                }
            }
        }

        // 종료 조건: 새로 찾은 블록이 더 이상 없을 때
        if (block.length === 0) {
            break;
        }

        // 3)
        block.forEach(e => {
            let [i, j] = e;

            board[i][j] = 0;
            board[i][j + 1] = 0;
            board[i + 1][j] = 0;
            board[i + 1][j + 1] = 0;
        });


        // 4) 
        // 아래에서 위 확인
        // 위에서 아래 확인 시 이미 터진 블록의 아래에 블록이 있을 수 있음
         for (let j = 0; j < n; j++) {
            for (let i = m - 1; i > 0; i--) {
                // console.log(board[i][j])
                if (board[i][j] === 0) {
                    for (let k = i - 1; k >= 0; k--) {
                        if (board[k][j] !== 0) {
                            board[i][j] = board[k][j];
                            board[k][j] = 0;
                            break;
                        }
                    }
                }
            }
        }
    }

    // 5)
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                answer++;
            }
        }
    }

    return answer;
}