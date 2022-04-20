const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const testCase = Number(input[0]);

const solution = (input) => {
    let answer = 0;

    for (let i = 0; i < testCase; i++) {
        const word = input[i + 1].trim();
        const preLetter = [];
        let groupWord = 1;

        for (let j = 0; j < word.length; j++) {
            if(!preLetter.includes(word[j])) {
                preLetter.push(word[j]);
            } else {
                if (preLetter.indexOf(word[j]) !== preLetter.length - 1) {
                    groupWord = 0;
                    break;
                }
            }
        }

        if (groupWord) answer++;
    }
    
    return answer;
}

console.log(solution(input));