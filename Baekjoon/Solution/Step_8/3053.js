const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = Number(fs.readFileSync(file).toString().trim());

const solution = (input) => {
    let answer1 = 0;
    let answer2 = 0;
    
    answer1 = (Math.pow(input, 2) * Math.PI).toFixed(6);
    answer2 = (Math.pow(input, 2) * 2).toFixed(6);

    console.log(answer1);
    console.log(answer2);
}
solution(input);