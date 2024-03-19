function solution(park, routes) {
    let answer = [];

    // 1)
    let direction = {
        'N': [-1, 0],
        'S': [1, 0],
        'W': [0, -1],
        'E': [0, 1]
    };
    let start_point = [];

    // 2)
    let max_x = park.length-1; // park의 x, y 최대 크기 구하기
    let max_y = park[0].length-1; // park의 x, y 최대 크기 구하기

    // 3)
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] == 'S') {
                start_point = [i, j];// 시작점 위치 구하기
            }
        }
    }


    // 4)
    routes.forEach(e => {
        let [dir, distance] = e.split(' '); // 방향과 거리 구조분해할당 하여 사용하기 쉽게 만든다.
        let [nx, ny] = [start_point[0], start_point[1]]; // 임시 변수에 위치 저장 Ex) (0, 0)
        let isTrue = true; // 조건을 충족했을 때 해당 위치를 업데이트 하기 위한 flag


        for (let i = 0; i < Number(distance); i++) { // distance만큼 반복 시행
            nx += direction[dir][0];
            ny += direction[dir][1];

            /*--------------------------------------
            * nx, ny가 direction[dir]에 따라 더해졌지만 (0, 2) 
            * 조건을 충족하지 않았다면 위치를 업데이트 하지 않고 다음 반복문 시행 
            *
            * 다음 for문에 들어왔을 때 [nx, ny]의 값은 위치 값이 변하지 않은 (0, 0)
            --------------------------------------*/
            if (nx < 0 || nx > max_x || ny < 0 || ny > max_y || park[nx][ny] == 'X') {
                isTrue = false;
                break;
            }
        }

        // 5)
        // 목표 거리까지 모두 이동했을 때 위치 업데이트
        if (isTrue) {
            start_point = [nx, ny];
        }
    });

    return start_point;
}