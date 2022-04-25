const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = Number(fs.readFileSync(file).toString().trim());

const fibonacci = (num) => {
    if (num < 2) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(input));