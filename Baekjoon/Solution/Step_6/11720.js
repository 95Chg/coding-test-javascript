const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const textLength = Number(input[0]);
const numbers = input[1].split('').map(Number);
const answer = numbers.reduce((acc, cur) => acc + cur);

console.log(answer);