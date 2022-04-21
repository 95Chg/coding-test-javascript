const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const isPrime = (n) => {
    if (n == 1) return false;

    for (let i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }

    return true;
}

const solution = (input) => {
    const start = input[0];
    const end = input[1];
    const numbers = Array.from({length: end - start + 1}, (v, i) => i + start);
    const primeNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        if(isPrime(numbers[i])) {
            primeNumbers.push(numbers[i]);
        }
    }

    if (primeNumbers.length !== 0) {
        console.log(primeNumbers.reduce((acc, cur) => acc + cur))
        console.log(primeNumbers.sort((a, b) => a - b)[0])
    } else {
        console.log(-1);
    }
}

solution(input);