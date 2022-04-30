const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const [testCase, coordsArr] = [Number(arr.shift()), arr[0].split(' ').map(Number)];
    const setSortedCoords = Array.from(new Set([...coordsArr])).sort((a, b) => a - b);
    const mapComparedCoords = new Map();
    let answer = '';

    [...setSortedCoords].forEach((num, index) => mapComparedCoords.set(num, index));

    coordsArr.forEach((num) => answer += mapComparedCoords.get(num) + ' ')

    return answer.trim();
};

console.log(solution(input));