const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const solution = (input) => {
    const fixedCost = Number(input[0]);
    const variableCost = Number(input[1]);
    const sellingPrice = Number(input[2]);
    const margin = sellingPrice - variableCost;
    const breakEvenPoint = Math.floor(fixedCost / margin) + 1;

    console.log(margin <= 0 ? -1 : breakEvenPoint);
}

solution(input);