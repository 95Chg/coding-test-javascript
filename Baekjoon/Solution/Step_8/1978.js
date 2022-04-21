const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const isPrime = (n) => {
    if (n == 1) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }

    return true;
}

const solution = (input) => {
    const nums = input[1].split(' ').map(Number);
    let answer = 0;

    for (let i = 0; i < nums.length; i++) {
        if (isPrime(nums[i])) answer++;
    }

    return answer;
}
console.log(solution(input));