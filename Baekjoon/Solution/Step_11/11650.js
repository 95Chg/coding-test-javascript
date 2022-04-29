const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const [testCase, ...coordsArr] = [parseInt(arr.shift()), ...arr.map((el) => el.split(' ').map(Number))];
    const answer = [];
    const sortedcoordsArr = coordsArr
                            .sort((a, b) => {
                                if(a[0] !== b[0]) return a[0] - b[0];
                                else return a[1] - b[1];
                            });

    sortedcoordsArr.forEach((coords) => answer.push(coords));

    return answer.join('\n').replaceAll(',', ' ');
};

console.log(solution(input));