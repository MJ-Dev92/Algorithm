// 2x + 2y - 4 = brown
// (x - 2)(y - 2) = yellow
// x = (brown / 2) + 2 - y;
// (brown / 2 - y)(y - 2) = yellow
// (y - brown / 2)(y - 2) = - yellow;
// y ^2 - (2 + brown / 2)y + brown + yellow = 0;

function solution(brown, yellow) {
    let y = 1;
    while (y < 2000000) {
        const equation = Math.pow(y, 2) - (2 + brown / 2) * y + brown + yellow;
        if (equation === 0) break;
        y++;
    }
    return [brown / 2 + 2 - y, y];
}