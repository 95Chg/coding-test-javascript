const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const testLength = Number(input[0]);
const scoreList = input[1].split(' ').map(Number);
const topScore = Math.max(...scoreList);
let sumScore = 0;

for (let i = 0; i < testLength; i++) {
    sumScore += (scoreList[i] / topScore) * 100;
}

console.log(sumScore / testLength);