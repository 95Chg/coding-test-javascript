const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const solution = (arr) => {
    const nums = arr.sort((a, b) => b - a);
    const answer = [];

    const getGCD = (a, b) => {
        let gcd = 1;

        for (let i = 2; i <= Math.min(a, b); i += 1) {
            if (a % i === 0 && b % i === 0) gcd = i;
        }
        
        return gcd;
    };
    answer.push(getGCD(...nums));

    const getLCM = (a, b) => {
        let lcm = 1;

        while (true) {
            if(lcm % a === 0 && lcm % b === 0) break;
            lcm++
        }

        return lcm;
    };
    answer.push(getLCM(...nums));

    return answer.join('\n');
};

console.log(solution(input));