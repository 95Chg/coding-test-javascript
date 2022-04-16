const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim();

let count = 0;
let currentNumber = +input;
let sumNumber;

while(true) {
    sumNumber = Math.floor(currentNumber / 10) + (currentNumber % 10);
    currentNumber = (currentNumber % 10) * 10 + (sumNumber % 10);
    count++;

    if(currentNumber === +input) break;
}

console.log(count);