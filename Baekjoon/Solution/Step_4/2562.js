const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let numbers = input.map(Number);
let max = numbers[0];
let count = 0;

for (let i = 0; i < numbers.length; i++) {
    if (max < numbers[i]) max = numbers[i];

    if (max === numbers[i]) {
        count = numbers.indexOf(max) + 1;
    }
}
console.log(max);
console.log(count);