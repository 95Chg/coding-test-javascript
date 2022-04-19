const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n');

solution(input);

function solution(input) {
    const testCase = Number(input[0]);

    for (let i = 0; i < testCase; i++) {
        let answer = '';
        const repeatTime = input[i + 1].split(' ')[0];
        const string = input[i + 1].trim().split(' ')[1];
        answer = string.split('').map((str) => str.repeat(repeatTime)).join('');
        console.log(answer);
    }
}