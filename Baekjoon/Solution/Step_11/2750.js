const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const solution = (nums) => {
    const [testCase, ...num] = [nums.shift(), ...nums];
    num.sort((a, b) => a - b);

    for (let i = 0; i < num.length; i += 1) {
        console.log(num[i]);
    }
};

solution(input);