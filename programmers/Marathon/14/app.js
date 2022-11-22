// 14번 최소 직사각형

let size = [[60, 50], [30, 70], [60, 30], [80, 40]];
// let size1 = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]];
// let size2 = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];

solution(size2);

function solution(a, b, c) {
    let sizes = []
    
    for (arr of a) {
        for (size of arr) {
            sizes.push(size)
        };
    };
    sizes.sort();
    console.log(sizes[a.length - 1] * sizes[sizes.length - 1]);
};

// function solution(a, b, c) {
//     const maxWidth = Math.max(...sizes.map(card => Math.min(...card)));
//     const maxHeight = Math.max(...sizes.map(card => Math.max(...card)));
//   return maxWidth * maxHeight;
// };