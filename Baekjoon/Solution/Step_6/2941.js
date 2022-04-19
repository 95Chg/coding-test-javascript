const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim();

const croatia = ['c=', 'c-', 'dz=', 'd-','lj', 'nj', 's=', 'z='];

const solution = (input) => {
    for (let str of croatia) {
        input = input.split(str).join('a');
    }

    return input.length;
}

console.log(solution(input));