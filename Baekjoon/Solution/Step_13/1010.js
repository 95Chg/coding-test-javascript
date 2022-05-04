const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (numArr) => {
    const testCase = Number(numArr.shift());
    const nums = numArr.map((el) => el.split(' ').map(Number));
    const answer = [];

    for (let i = 0; i < testCase; i += 1) {
        const [K, N] = nums[i];
        const cache = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
        
        for (let j = 0; j <= N; j += 1) {
            for (let k = 0; k <= j; k += 1) {
                if (j === k || k === 0) cache[j][k] = 1;
                else cache[j][k] = cache[j - 1][k - 1] + cache[j - 1][k];
            } 
        }

        answer.push(cache[N][K]);
    }

    return answer.join('\n');
};

console.log(solution(input));