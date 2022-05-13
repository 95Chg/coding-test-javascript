function solution(s) {
    let target = s;
    const numStrArr = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'];
    
    for (let i = 0; i < numStrArr.length; i += 1) {
        target = target.split(numStrArr[i]).join(i);
    }
    
    return Number(target);
}