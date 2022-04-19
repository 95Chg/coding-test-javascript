const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim();

console.log(solution(input));

function solution(input) {
    const answerArr = Array(26).fill(0);
    const upperStr = input.toUpperCase();

    for(let i = 0; i < upperStr.length; i++) {
        answerArr[upperStr[i].codePointAt(0) - 65] ++;
    }

    const max = Math.max(...answerArr);

    if(answerArr.filter((val) => val === max).length === 1) {
        return String.fromCodePoint(answerArr.findIndex((val) => val === max) + 65);
    } else {
        return '?';
    }
}