const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (input) => {
    const testCase = Number(input.shift());
    let answer = '';

    for (let i = 0; i < testCase; i += 1) {
        const positions = input[i].split(' ').map(Number);
        const [x1, y1, r1, x2, y2, r2] = [...positions];
        const distance = (x1 - x2) ** 2 + (y1 - y2) ** 2;
        const sumR = (r1 + r2) ** 2;
        const diffR = (r1 - r2) ** 2;

        if (distance === 0) {
            if (r1 === r2) answer += -1 + '\n';
            else answer += 0 + '\n';
        } else {
            if (distance > sumR || distance < diffR) answer += 0 + '\n';
            else if (distance === sumR || distance === diffR) answer += 1 + '\n';
            else if (distance < sumR) answer += 2 + '\n';
        }
    }
    
    return answer.trim();
};

console.log(solution(input));