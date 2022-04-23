const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const solution = (input) => {
    const start = input[0];
    const end = input[1];
    const prime = [false, false, ...Array(end - 1).fill(true)];
    let answer = '';

    for (let i = 2; i * i <= end; i++) {
        if (prime[i]) {
            for (let j = i * 2; j <= end; j += i) {
                prime[j] = false;
            }
        }
    }

    for (let i = start; i <= end; i++) {
        if (prime[i]) answer += i + '\n';
    }

    console.log(answer.trim());
};

solution(input);
