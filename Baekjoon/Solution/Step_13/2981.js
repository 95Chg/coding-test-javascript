const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const solution = (numArr) => {
    const [numberCase, nums] = [numArr.shift(), numArr.sort((a, b) => a - b)];
    const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);
    const getDivisors = (num) => {
        const divisors = [];
        for (let i = 1; i * i <= num; i += 1) {
            if (num % i === 0) {
                if (num / i === i) divisors.push(i);
                else {
                    divisors.push(i);
                    divisors.push(num / i);
                }
            }
        }
        divisors.shift();

        return divisors.sort((a, b) => a - b);
    };

    let gcd = nums[1] - nums[0];
    for (let i = 2; i < numberCase; i += 1) {
        let diff = nums[i] - nums[i - 1];

        gcd = getGCD(gcd, diff);
    }

    return getDivisors(gcd).join(' ');
};

console.log(solution(input));