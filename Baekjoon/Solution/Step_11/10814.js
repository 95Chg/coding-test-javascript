const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const[testCase, ...memberArr] = [Number(arr.shift()), ...arr.map((el) => el.split(' '))];
    const answer = [];
    memberArr
        .sort((a, b) => a[0] - b[0])
        .forEach((el) => answer.push(el));

    return answer.join('\n').replaceAll(',', ' ');
};

console.log(solution(input));