const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

////////////////////////////////////////////////////////////////////////////////////////////////

const isPrime1 = (value) => {
    const number = value;
    const primeNumber = [false, false, ...Array(number - 1).fill(true)];

    for (let i = 2; i * i <= number; i += 1) {
        if (primeNumber[i]) {
            for (let j = i * 2; j <= number; j += i) primeNumber[j] = false;
        }
    }

    return primeNumber.flatMap((v, i) => (v ? i : []));
};

const solution1 = (input) => {
    const testCase = input.shift();
    let answer = '';

    for (let i = 0; i < testCase; i += 1) {
        const primeNumberList = isPrime1(input[i]);
        const number = input[i];
        let temp = [];

        for (let j = 0; primeNumberList[j] <= number / 2; j += 1) {
            const remain = number - primeNumberList[j];
            const index = primeNumberList.indexOf(remain);
            if (index !== -1) temp.push([primeNumberList[j], primeNumberList[index]]);
        }     
        
        if (temp.length !== 0) {
            const low = temp.pop();
            answer += `${low[0]} ${low[1]}` + '\n';
        }
        
    }

    return answer.trim();
}

console.log(solution1(input));

////////////////////////////////////////////////////////////////////////////////////////////////

const isPrime2 = (value) => {
    const number = value;
    const primeNumber = [false, false, ...Array(number - 1).fill(true)];

    for (let i = 2; i * i <= number; i += 1) {
        if (primeNumber[i]) {
            for (let j = i * 2; j <= number; j += i) primeNumber[j] = false;
        }
    }

    return primeNumber;
};
    
const solution2 = (input) => {
    const testCase = input.shift();
    const maxInput = Math.max(...input);
    const primeNumberList = isPrime2(maxInput);
    let answer = '';

    for (let i = 0; i < testCase; i += 1) {
        const number = input[i];
        const halfNumber = number / 2;

        for (let j = 0; j <= halfNumber; j += 1) {
            if(primeNumberList[halfNumber - j] && primeNumberList[halfNumber + j]) {
                answer += `${halfNumber - j} ${halfNumber + j}` + '\n';
                break;   
            } 
        }
    }

    return answer.trim();
};

console.log(solution2(input));
