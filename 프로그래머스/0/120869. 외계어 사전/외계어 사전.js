function solution(spell, dic) {
    let regExpSepll = '';
    for(const word of spell) {
        const newWord = `(?=.*${word})+`
        regExpSepll += newWord
    }
    var regexp = new RegExp(regExpSepll, 'g')


    return dic.find((item) => regexp.test(item)) ? 1 : 2
}