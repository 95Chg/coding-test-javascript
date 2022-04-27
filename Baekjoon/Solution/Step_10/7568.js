const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const studentNumber = Number(arr.shift());
    const student = arr.map((el) => el.split(' ').map(Number));
    let answer = '';

    for(let i = 0; i < studentNumber; i += 1) {
        let rank = 1;

        for(let j = 0; j < studentNumber; j += 1) {
            if (i !== j) {
                if (student[i][0] < student[j][0] && student[i][1] < student[j][1]) rank += 1;
            }
        }

        answer += rank + ' '
    }
    
    return answer.trim();
};

console.log(solution(input));