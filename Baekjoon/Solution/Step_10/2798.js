const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

//////////////////////////////// 반복문 이용한 풀이 ////////////////////////////////

const blackJack1 = (input) => {
    const [cardCase, target] = [...input[0].split(' ').map(Number)];
    const cards = input[1].split(' ').map(Number);
    let answer = 0;

    for (let i = 0; i < cardCase - 2; i += 1) {
        for (let j = i + 1; j < cardCase - 1; j += 1) {
            for (let k = j + 1; k < cardCase; k += 1) {
                let sum = cards[i] + cards[j] + cards[k];
                if (sum > answer && sum <= target) answer = sum;
            }
        }
    }

    return answer;
};

console.log(blackJack1(input));

//////////////////////////////// 조합을 이용한 풀이 ////////////////////////////////

const blackJack2 = (input) => {
    const [cardCase, target] = [...input[0].split(' ').map(Number)];
    const cards = input[1].split(' ').map(Number);
    let answer = 0;

    const combination = (arr, n) => {
        if (n === 1) return arr.map((v) => [v]);
        const result = [];
        
        arr.forEach((fixed, idx, arr) => {
            const rest = arr.slice(idx + 1);
            const combis = combination(rest, n - 1);
            const combine = combis.map((v) => [fixed, ...v]);
            result.push(...combine);
        })

        return result;
    };

    const temp = [...new Set(combination(cards, 3)
        .map((card) => card[0] + card[1] + card[2]))]
            .forEach((el) => {
                if (el > answer && el <= target) answer = el;
            });

    return answer;
};

console.log(blackJack2(input));