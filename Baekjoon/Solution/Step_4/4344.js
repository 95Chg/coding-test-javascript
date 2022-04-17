const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const testCase = Number(input[0]);

for (let i = 0; i < testCase; i++) {
    const scoreList = input[i + 1].split(' ').map(Number);
    const studentNumber = scoreList[0];
    const scores = scoreList.splice(1, studentNumber);

    let averageScore = scores.reduce((acc, cur) => acc + cur) / studentNumber;
    let overAverPeople = scores.filter((score) => score > averageScore).length;
    let answer = ((overAverPeople / studentNumber) * 100).toFixed(3)
    console.log(`${answer}%`);
}

/*

Oneweek's solution

const fs = require('fs')
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().trim().split('\n')
const testCases = Number(input[0])

const solution = (input) => {
    const [studentNumber, ...studentScores] = input.split(' ')
    const averageScore = studentScores.reduce((acc, current) => acc + Number(current), 0) / Number(studentNumber)
    const studentsOverAverageScore = studentScores.filter((score) => score > averageScore).length
    return `${((studentsOverAverageScore / studentNumber) * 100).toFixed(3)}%`
}

Array.from({length: testCases})
    .fill(0)
    .map((_, index) => {
        const currentInput = input[index + 1]
        const result = solution(currentInput)
        console.log(result)
    })

*/