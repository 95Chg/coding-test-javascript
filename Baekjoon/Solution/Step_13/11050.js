const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const solution = (numArr) => {
    const [N, K] = [...numArr];
    let n = 1;
    let k = 1;
    let n_k = 1;

    for(let i = 1; i <= N; i += 1) {
        n *= i;
    }

    for(let i = 1; i <= K; i += 1) {
        k *= i;
    }

    for(let i = 1; i <= N - K; i += 1) {
        n_k *= i;
    }

    return (n / (k * n_k));
};

console.log(solution(input));