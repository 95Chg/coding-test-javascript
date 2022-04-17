const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const testLength = Number(input[0]);

for (let i = 0; i < testLength; i++) {
    let totalScore = 0;
    let score = 0;
    let str = input[i + 1];

    for(let j = 0 ; j < str.length; j++) {
        if (str[j] === 'O') {
            score++;
        } else {
            score = 0;
        }
        totalScore += score;
    }

    console.log(totalScore);
}

/*

Oneweek's solution

const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n')
const testCases = Number(input[0])

const solution = (input) => {
    let acc = 0
    return input.split('').reduce((result, current) => {
        const isCorrect = current === 'O'
        const score = isCorrect ? ++acc : 0
        if (!isCorrect) {
            acc = 0
        }
        return result + score
    }, 0)
}

Array.from({length: testCases})
    .fill(0)
    .map((_, index) => {
        const currentInput = input[index + 1]
        const result = solution(currentInput)
        console.log(result)
    })

*/