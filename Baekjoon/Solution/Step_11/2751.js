const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

//////////////////////////////// 내장 함수 풀이 ////////////////////////////////

const solution1 = (nums) => {
    const [testCase, ...num] = [nums.shift(), ...nums];
    return num.sort((a, b) => a - b).join('\n');
};

console.log(solution1(input));

//////////////////////////////// 병합 정렬 풀이 ////////////////////////////////

const solution2 = (nums) => {
    const [testCase, ...num] = [nums.shift(), ...nums];

    function merge (a, b) {
        if (a.length === 0) return b;
        else if (b.length === 0) return a;
        else if (a[0] < b[0]) return [a[0], ...merge(a.slice(1), b)];
        else return [b[0], ...merge(a, b.slice(1))];
    };

    function mergeSort (arr) {
        if (arr.length === 1) return arr;
        else {
            const mid = Math.floor(arr.length / 2);
            return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
        }
    };

    return mergeSort(num).join('\n');
};

console.log(solution2(input)); // 메모리 초과