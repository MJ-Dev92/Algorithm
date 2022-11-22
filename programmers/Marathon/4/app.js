// 4번 문제 완주하지 못한 선수

let participant = ["marina", "josipa", "nikola", "vinko", "filipa"];
// let completion = ["josipa", "filipa", "marina", "nikola"];
// let participant = ["mislav", "stanko", "mislav", "ana"]
// let completion = ["stanko", "ana", "mislav"]


solution(participant, completion);

function solution(participant, completion) {
    participant.sort();
    completion.sort();	
    for(let i = 0; i < participant.length; i++) {
        if (participant[i] !== completion[i]) return participant[i];
    }
}



// function solution(participant, completion) {
//     var answer = '';
    
//     let arr = [];
//     arr.push(participant[3])
//     let len = participant.length;

//     for (let i = 0; i < len; ++i) {
//         let count = 0;

//         for (let j = 0; j < completion.length; ++j) {

//             if (participant[i] === completion[j]) {
//                 count++
//                 arr.push(participant[i])
//             }
            
//         }

//         if (count === 1) {
//             arr.push(participant[i])
//         }
//     }
//     console.log(participant);
//     return answer;
// }