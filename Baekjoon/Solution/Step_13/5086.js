const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    let answer = '';

    for (let i = 0; i < arr.length; i += 1) {
        const nums = arr[i].split(' ').map(Number);
        if (nums[0] < nums[1] && nums[1] % nums[0] === 0) answer += `factor\n`;
        else if (nums[0] > nums[1] && nums[0] % nums[1] === 0) answer += `multiple\n`
        else if (nums[0] !== 0 && nums[1] !== 0 && nums[0] % nums[1] !== 0 && nums[1] % nums[0] !== 0) answer += `neither\n`
        else if (nums[0] === 0 && nums[1] === 0) break;
    }

    return answer.trim();
};

console.log(solution(input));