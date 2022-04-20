const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim();

const solution = (input) => {
    const target = Number(input);
    let current = 1;
    let grade = 1;

    while (current < target) {
        current += grade * 6;
        grade++;
    }
    
    return grade;
}

console.log(solution(input));

/*

1 / 2, ..., 7 / 8, ..., 19 / 20, ..., 37 / 38, ..., 61/ 62, ..., 91/ ...
1      2             3             4            5             6 

*/