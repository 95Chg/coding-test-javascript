const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = Number(fs.readFileSync(file).toString().trim());

const solution = (input) => {
    let weight = input;
    let count = 0;

    while (weight > 0) {
        if (weight % 5 === 0) {
            count += weight / 5;
            weight -= 5 * (weight / 5);
            break;
        }

        count ++;
        weight -= 3;

        if (weight < 0) count = -1;
    }
    
    return count;
}
console.log(solution(input));