const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (input) => {
    const testCase = Number(input[0]);
    for (let i = 0; i < testCase; i++) {
        const height = Number(input[i + 1].split(' ')[0]);
        const width = Number(input[i + 1].split(' ')[1]);
        const target = Number(input[i + 1].split(' ')[2]);
        
        let roomNumber = 0;
        if (Number.isInteger(target / height)) {
            roomNumber = target / height;
        } else {
            roomNumber = Math.ceil(target / height);
        }
        
        let roomFloor = 0;
        if (target % height === 0) {
            roomFloor = height;
        } else {
            roomFloor = target % height;
        }

        roomNumber < 10
        ? console.log(`${roomFloor}0${roomNumber}`)
        : console.log(`${roomFloor}${roomNumber}`)
    }
}

solution(input);