const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ');

const solution = (input) => {
    const dayMoving = Number(input[0]);
    const nightMoving = Number(input[1]);
    const height = Number(input[2]);
    const answer = Math.ceil( (height - nightMoving) / (dayMoving - nightMoving))    

    console.log(answer);
}

solution(input);