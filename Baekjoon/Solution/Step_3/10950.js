let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

solution(input);

function solution(input) {
    let testLength = Number(input[0]);

    for (let i = 0; i < testLength; i++) {
        let numbers = input[i + 1].split(' ');
        num1 = parseInt(numbers[0]);
        num2 = parseInt(numbers[1]);

        console.log(num1 + num2);
    }
}