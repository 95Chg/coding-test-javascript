const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = Number(fs.readFileSync(file).toString().trim());

const factorial = (num) => {
    if (num === 0) return 1;
    return num * factorial(num - 1);
};

console.log(factorial(input));