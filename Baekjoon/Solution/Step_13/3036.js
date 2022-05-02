const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (numArr) => {
    const [testCase, ringArr] = [Number(numArr[0]), numArr[1].split(' ').map(Number)];
    const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);
    const getLCM = (a, b) => a * b / getGCD(a, b);
    let answer = '';

    for (let i = 1; i < testCase; i += 1) {
        const ringOne = ringArr[0];
        const lcm = getLCM(ringOne, ringArr[i]);
        answer += `${lcm / ringArr[i]}/${lcm / ringOne}\n`
    }

    return answer.trim('\n');
};

console.log(solution(input));