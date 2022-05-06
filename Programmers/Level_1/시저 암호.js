function solution(s, n) {
    return s
        .split('')
        .map((el) => {
            if (el === ' ') return ' ';
            const aeskiCode = el.codePointAt(0);
            //   문자가 대문자인데 범위가 넘어갈 때          문자가 소문자인데 범위가 넘어갈 때
            if (aeskiCode <= 90 && aeskiCode + n > 90 || aeskiCode <= 122 && aeskiCode + n > 122) {
                return String.fromCodePoint(aeskiCode + n - 26);
            } else {
                return String.fromCodePoint(aeskiCode + n)
            }
        })
        .join('');
}

// aeskiCode
// A ~ Z : 65 ~ 90
// a ~ z : 97 ~ 122