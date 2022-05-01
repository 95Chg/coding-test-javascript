const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const [testCase, numsArr] = [Number(arr.shift()), arr];
    const answer = [];
    const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);
    const getLCM = (a, b) => a * b / getGCD(a, b);

    for (let i = 0; i < testCase; i += 1) {
        const nums = numsArr[i].split(' ').sort((a, b) => b - a);
        answer.push(getLCM(...nums));
    }

    return answer.join('\n');
};

console.log(solution(input));