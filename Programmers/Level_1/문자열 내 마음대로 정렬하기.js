function solution(strings, n) {
    strings.sort((a, b) => {
        if (a[n].codePointAt(0) === b[n].codePointAt(0)) return a > b ? 1 : -1;
        else return a[n].codePointAt(0) - b[n].codePointAt(0);
    })
    
    return strings;
}