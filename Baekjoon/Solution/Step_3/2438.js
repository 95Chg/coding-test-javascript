const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = Number(fs.readFileSync(file).toString().trim());

let answer = '';

for (let i = 0; i < input; i++) {
    for (let j = 0; j <= i; j++){
        answer += '*'
    }
    answer += '\n'
}

console.log(answer);