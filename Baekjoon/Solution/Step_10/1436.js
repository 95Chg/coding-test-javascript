const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = Number(fs.readFileSync(file).toString().trim());

const solution = (num) => {
    const movieNumber = num;
    let current = 666;
    let count = 0;
    let answer = '';

    while (true) {
        if (String(current).includes('666')) {
            count += 1;
            if (count === movieNumber) {
                answer = current;
                break;
            }
        }

        current++;
    }

    return answer;
}

console.log(solution(input));