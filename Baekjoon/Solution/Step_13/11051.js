const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const solution = (numArr) => {
    const [N, K] = numArr;
    let dy = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
    
    for (let i = 0; i <= N; i++) {
      for (let j = 0; j <= i; j++) {
        if (i === j || j === 0) dy[i][j] = 1;
        else dy[i][j] = dy[i - 1][j - 1] + dy[i - 1][j];
      }
    }
    
    return dy[N][K] % 10007;
};

console.log(solution(input));