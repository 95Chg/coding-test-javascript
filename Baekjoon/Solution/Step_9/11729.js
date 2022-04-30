const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = Number(fs.readFileSync(file).toString().trim());

const towerOfHanoi = (num) => {
    let count = 0;
    let answer = '';

    const movePlate = (num, start, waypoint, end) => {
        if (!num) return;
        else {
            movePlate(num - 1, start, end, waypoint);
            answer += `${start} ${end}\n`
            count += 1;
            movePlate(num - 1, waypoint, start, end);
        }
    }

    movePlate(num, 1, 2, 3);
    
    console.log(count);
    return answer.trim();
};

console.log(towerOfHanoi(input));