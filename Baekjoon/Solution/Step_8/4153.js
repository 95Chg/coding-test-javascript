const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (input) => {
    let ausar = 0;
    let auset = 0;
    let heru = 0;
    let answer = '';

    for (let i = 0; i < input.length; i += 1) {
        const temp = input[i].split(' ').map(Number).sort((a, b) => a - b);
        ausar = temp[0];
        auset = temp[1];
        heru = temp[2];

        if (ausar === 0 && auset === 0 && heru === 0) break;
        
        answer +=
        heru * heru === ausar * ausar + auset * auset
            ? 'right' + '\n'
            : 'wrong' + '\n';
    }

    return answer.trim();
};

console.log(solution(input));