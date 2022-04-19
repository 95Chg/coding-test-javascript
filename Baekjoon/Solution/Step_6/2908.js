const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const solution = (input) => {
    const reverseA = Number(input[0].split('').reverse().join(''))
    const reverseB = Number(input[1].split('').reverse().join(''))

    return reverseA > reverseB ? reverseA : reverseB;
}

console.log(solution(input));