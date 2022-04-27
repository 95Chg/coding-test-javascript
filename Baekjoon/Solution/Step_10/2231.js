const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = Number(fs.readFileSync(file).toString().trim());

const decomposeSum = (number) => {
    const target = input;

    for (let i = 1; i <= target; i += 1) {
        let sum = 0;
        let num = i;
        sum = num + num.toString().split('').map(Number).reduce((acc, cur) => acc + cur);

        if(sum === target) return i;
    }

    return 0;
};

console.log(decomposeSum(input));