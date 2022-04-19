const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().toUpperCase();

const dial = {
    ABC: 2,
    DEF: 3,
    GHI: 4,
    JKL: 5,
    MNO: 6,
    PQRS: 7,
    TUV: 8,
    WXYZ: 9
};

const solution = (input) => {
    let answer = 0;

    for(let i = 0; i < input.length; i++) {
        for(let str in dial) {
            if(str.includes(input[i])) answer += dial[str] + 1;
        }
    }

    return answer;
}

console.log(solution(input));