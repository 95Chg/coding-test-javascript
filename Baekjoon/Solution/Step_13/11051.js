const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const solution = (numArr) => {
    const [n, k] = numArr;
    const cache = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

    for (let i = 0; i <= n; i += 1) {
        for (let j = 0; j <= i; j += 1) {
            if (i === j || j === 0) cache[i][j] = 1;
            else cache[i][j] = cache[i - 1][j - 1] + cache[i - 1][j];
        }
    }

    return cache[n][k] % 10007;
};

console.log(solution(input));