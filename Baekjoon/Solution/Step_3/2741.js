const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = Number(fs.readFileSync(file).toString().trim());

let answer = '';

for (let i = 1; i <= input; i++) {
    answer += i + '\n'
}

console.log(answer);