function solution(dartResult) {
    let score = 0;
    const result = [];
    
    for (let i = 0; i < dartResult.length; i += 1) {
        if (!isNaN(dartResult[i])) score = Number(dartResult[i - 1]) === 1 ? 10 : Number(dartResult[i]);
        else if (dartResult[i] === 'S') result.push(score);
        else if (dartResult[i] === 'D') result.push(score ** 2);
        else if (dartResult[i] === 'T') result.push(score ** 3);
        else if (dartResult[i] === '*') {
            if (result.length < 2) {
                result[result.length - 1] = result[result.length - 1] * 2;
            } else {
                result[result.length - 2] = result[result.length - 2] * 2;
                result[result.length - 1] = result[result.length - 1] * 2;
            }
        }
        else if (dartResult[i] === '#') {
            result[result.length - 1] = result[result.length - 1] * -1;
        }
    }
    
    return result.reduce((acc, cur) => acc + cur, 0);
}