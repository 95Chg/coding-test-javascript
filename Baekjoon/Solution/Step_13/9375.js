const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const testCase = Number(arr.shift());
    let answer = '';

    let pointer = 0;
    for(let i = 0; i < testCase; i += 1) {
        const clothMap = {};
        const clothCase = Number(arr[pointer]);
        for (let j = 1; j <= clothCase; j += 1) {
            const clothArr = arr[j + pointer].split(' ');
            const clothName = clothArr[0].trim('\r');
            const clothKind = clothArr[1].trim('\r');

            if (clothMap[clothKind]) clothMap[clothKind].push(clothName);
            else clothMap[clothKind] = [clothName];
        }
        
        pointer += clothCase + 1;

        let count = 1;
        for (let key in clothMap) count *= clothMap[key].length + 1;

        answer += `${count - 1}\n`
    }

    return answer.trim('\n');
};

console.log(solution(input));