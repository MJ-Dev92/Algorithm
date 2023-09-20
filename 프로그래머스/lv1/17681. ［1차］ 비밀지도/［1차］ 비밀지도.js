// function solution(n, arr1, arr2) {
    
//     const bin1 = arr1.map(num => {
//         return num.toString(2).padStart(arr1.length, '0');
//     })
//     const bin2 = arr2.map(num => {
//         return num.toString(2).padStart(arr2.length, '0');
//     })

//     const answer = bin1.map((binary,binaryIdx)=>{
//         return binary.split('').map((string,stringIdx)=>{
//             return (string | bin2[binaryIdx][stringIdx]) === 1 ? '#' : ' ' 
//         }).join('')
//     })
    
//     return answer;
// }
function solution(n, arr1, arr2) {
    
    const bin1 = arr1.map(num => {
        return num.toString(2).padStart(n, '0');
    });
    
    const bin2 = arr2.map(num => {
        return num.toString(2).padStart(n, '0');
    });

    const answer = bin1.map((binary, binaryIdx) => {
        return binary.split('').map((string, stringIdx) => {
            // 정수로 변환하고 비트 OR 연산자를 사용하여 비교
            return (parseInt(string, 2) | parseInt(bin2[binaryIdx][stringIdx], 2)) === 1 ? '#' : ' ';
        }).join('');
    });

    return answer;
}
