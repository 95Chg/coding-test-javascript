const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const solution = (input) => {
    let answer = '';

    for (let i = 0; i < input.length; i += 1) {
        const start = input[i];
        const end = input[i] * 2;

        if(start > 0) {
            const primeNumberList = [false, false, ...Array(end - 1).fill(true)];
    
            for (let i = 2; i * i <= end; i++) {
                if (primeNumberList[i]) {
                    for (let j = i * 2; j <= end; j += i) primeNumberList[j] = false;  
                }
            }
            
            answer += primeNumberList.slice(start + 1).filter((el) => el === true).length + '\n';
        }
    }

    return answer.trim();
};

console.log(solution(input));