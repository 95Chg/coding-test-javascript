const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const inputCount = input.length;
let i = 0;

while (i < inputCount) {
    let numbers = input[i].split(' ').map(Number);
    console.log(numbers[0] + numbers[1])
    i++;
}