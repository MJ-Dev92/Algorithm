function solution(myString, pat) {
    var answer = '';

    for (let i=0; i<myString.length; i++) {
        const target = myString.slice(i, i + pat.length);

        if (target.length !== pat.length) break;
        if (target === pat) answer = myString.slice(0, i + pat.length);
    }

    return answer;
}