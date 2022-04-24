const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split(' ').map(Number);

const solution = (input) => {
    const [curX, curY, topX, topY] =[...input];
    const answer = [];

    curX > topX / 2 ? answer.push(topX - curX) : answer.push(curX);
    curY > topY / 2 ? answer.push(topY - curY) : answer.push(curY);

    return Math.min(...answer);
};

console.log(solution(input));