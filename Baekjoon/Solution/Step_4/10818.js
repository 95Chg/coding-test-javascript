const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let numsLength = Number(input[0]);
let nums = input[1].split(' ').map(Number);

nums.sort((a, b) => a - b);

console.log(`${nums[0]} ${nums[numsLength - 1]}`)