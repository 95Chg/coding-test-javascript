const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

let remain = new Set();

for(let i = 0; i < input.length; i++) {
    remain.add(input[i] % 42);
}

console.log(remain.size);