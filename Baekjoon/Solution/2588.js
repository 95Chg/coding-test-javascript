let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

let num1 = input[0];
let num2 = input[1];

for (let i = 2; i >= 0; i -= 1) {
    console.log(Number(num1 * num2[i]));
}
console.log(Number(num1 * num2));