const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const [testCase, ...coordsArr] = [parseInt(arr.shift()), ...arr.map((el) => el.split(' ').map(Number))];
    const answer = [];
    coordsArr
        .sort((a, b) => {
        if(a[1] !== b[1]) return a[1] - b[1];
        else return a[0] - b[0];
        })
        .forEach((coords) => answer.push(coords));

    return answer.join('\n').replaceAll(',', ' ');
};

console.log(solution(input));