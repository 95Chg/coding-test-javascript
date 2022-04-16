const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().split('\n');

let answer = '';

for (let i = 1; i <= input[0]; i++) {
    let numbers = input[i].split(' ');
    answer += Number(numbers[0]) + Number(numbers[1]) + '\n';
}

console.log(answer);