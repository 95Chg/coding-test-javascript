const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('').map(Number);

const solution = (numArr) => {
    return numArr.sort(((a, b) => b - a)).join('');
}

console.log(solution(input));