const fs = require("fs");
const file = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = Number(fs.readFileSync(file).toString().trim());

const isPrime = (value) => {
    if (value == 1) return false;

    for (let i = 2; i * i <= value; i++) {
        if (value % i == 0) return false;
    }

    return true;
};

const solution = (input) => {
    const number = input;
    let primeNumberList = [];
    let target = input;
    let divider = 2;

    while (target !== 1) {
        if (target % divider === 0) {
            if (isPrime(divider)) {
                primeNumberList.push(divider);
                target = target / divider;
                divider = 1;
            }
        }

        divider++;
    }

    if (number !== 1) {
        console.log(primeNumberList.join("\n"));
    }
};

solution(input);
