const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const[testCase, ...strArr] = [Number(arr.shift()), ...new Set(arr.map((str) => str.trim('\r')))];
    let answer = '';
    strArr
        .sort()
        .sort((a, b) => a.length - b.length)
        .forEach((str) => answer += str + '\n');

   return answer.trim();
};

console.log(solution(input));