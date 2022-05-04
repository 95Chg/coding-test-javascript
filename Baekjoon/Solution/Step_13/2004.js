const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const solution = (nums) => {
    const [n, k] = nums;

    const divisor5 = (num) => {
        let answer = 0;

        for (let i = 5; i <= num; i *= 5) {
            answer += Math.floor(num / i);
        }

        return answer;
    };

    const divisor2 = (num) => {
        let answer = 0;

        for (let i = 2; i <= num; i *= 2) {
            answer += Math.floor(num / i);
        }

        return answer;
    };

    const result5 = divisor5(n) - divisor5(k) - divisor5(n - k);
    const result2 = divisor2(n) - divisor2(k) - divisor2(n - k);

    return Math.min(result5, result2);
};

console.log(solution(input));