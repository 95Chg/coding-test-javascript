const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const solution = (input) => {
    const A = BigInt(input[0]);
    const B = BigInt(input[1]);
    const answer = A + B;
    
    return answer.toString();
}
console.log(solution(input));