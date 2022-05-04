const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = Number(fs.readFileSync(file).toString().trim());

const solution = (num) => {
    const target = num;
    let answer = 0;

    for (let i = 5; i <= target; i *= 5) {
        answer += Math.floor(num / i);
    }
    
    return answer;
};

console.log(solution(input));