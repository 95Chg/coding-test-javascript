const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const nums = input.map(Number);
const multipleNum = String(nums[0] * nums[1] * nums[2]);
const splitedNums = multipleNum.split('');

for (let i = 0; i <= 9; i++) {
    let count = 0;
    count = splitedNums.filter(number => number == i).length;
    console.log(count);
}