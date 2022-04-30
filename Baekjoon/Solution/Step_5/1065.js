const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim();

const n = +input

console.log(solution(n));

function solution(n) {
    let answer = 0;

    for (let i = 1; i <= n; i++) {
        if (i < 100) {
            answer++
            continue
        } else {
            const splitedNumber = i.toString().split('').map(Number);
            if (splitedNumber[0] - splitedNumber[1] === splitedNumber[1] - splitedNumber[2]) {
                answer++
            }
        }
    }

    return answer;
}