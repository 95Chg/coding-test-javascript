const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (input) => {
    let positionX = [];
    let positionY = [];

    for (let i = 0; i < input.length; i += 1) {
        const temp = input[i].split(' ').map(Number);
        positionX.push(temp[0]);
        positionY.push(temp[1]);
    }

    positionX = positionX.sort();
    positionY = positionY.sort();

    const x = positionX[0] === positionX[1] ? positionX[2] : positionX[0];
    const y = positionY[0] === positionY[1] ? positionY[2] : positionY[0];

    return `${x} ${y}`
};

console.log(solution(input));