function solution(myString) {
    return myString.split('x').reduce((acc, cur) => {
        if (cur.length !== 0) acc.push(cur);

        return acc;
    }, []).sort();
}