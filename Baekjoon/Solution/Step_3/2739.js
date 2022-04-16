let input = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

solution(input);

function solution(n) {
    for (let i = 1; i < 10; i++) {
        let mutiple = n * i
        console.log(`${n} * ${i} = ${mutiple}`)
    }
}