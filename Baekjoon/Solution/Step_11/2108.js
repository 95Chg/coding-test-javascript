const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const solution = (nums) => {
    const [testCase, ...num] = [nums.shift(), ...nums];
    const sortedNums = num.sort((a, b) => a - b);
    const answer = [];

    function average (arr) {
        const temp = Math.round(arr.reduce((acc,cur) => acc + cur) / testCase)
        answer.push(temp === -0 ? 0 : temp)
    };

    function medianValue (arr) {
        answer.push(testCase === 1 ? arr[0] : arr[Math.floor(testCase / 2)]); 
    };

    function theMostRepeatedValue (arr) {
        const map = new Map();
        let max = 1;
        for (let i = 0; i < testCase; i += 1) {
            if(!map.has(arr[i])) map.set(arr[i], 1);
            else {
                map.set(arr[i], map.get(arr[i]) + 1);
                max = Math.max(max, map.get(arr[i]))
            }
        }

        const maxNumArr = [];
        for (let [key, val] of map) {
            if (val === max) maxNumArr.push(key);
        }

        answer.push(maxNumArr.length === 1 ? maxNumArr[0] : maxNumArr[1]);
    };

    function valueRange (arr) {
        answer.push(arr[testCase - 1] - arr[0]);
    };

    average(sortedNums);
    medianValue(sortedNums);
    theMostRepeatedValue(sortedNums);
    valueRange(sortedNums);

    return answer.join('\n')
};

console.log(solution(input));