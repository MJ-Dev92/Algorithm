process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const a = data.split(" ");
    let answer = [];
    for (let i = 0; i < a[1]; ++i) {
        for (let j = 0; j < a[0]; ++j) {
            answer += "*";
        }
        answer += "\n";
     }
    console.log(answer);
});