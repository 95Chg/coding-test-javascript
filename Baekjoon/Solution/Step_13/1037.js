const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const [testCase, nums] = [Number(arr.shift()), arr[0].split(' ').map(Number).sort((a, b) => a - b)];
    let answer = 0;
    testCase < 2 ? answer = nums[0] * nums[0] : answer = nums[testCase - 1] * nums[0];

    return answer;
};

console.log(solution(input));