const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().split('\n');

let answer = '';
let testNumber = Number(input[0]);

for (let i = 1; i <= testNumber; i++) {
    let numbers = input[i].split(' ');
    let num1 = parseInt(numbers[0]);
    let num2 = parseInt(numbers[1]);
    let sum = num1 + num2;

    answer += `Case #${i}: ${sum}` + '\n';
}

console.log(answer);