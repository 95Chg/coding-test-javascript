/*

해당 문제는 node.js로 풀지 못하여 Python을 참고함

import sys
n = int(sys.stdin.readline())
b = [0] * 10001
for i in range(n):
    b[int(sys.stdin.readline())] += 1
for i in range(10001):
    if b[i] != 0:
        for j in range(b[i]):
            print(i)

*/

const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

////////////////////////////////  퀵 정렬 풀이 ////////////////////////////////

const solution = (nums) => {
    const [testCase, ...num] = [nums.shift(), ...nums];

    function quickSort (arr) {
        if (arr.length < 2) return arr;

        const pivot = arr[0];
        const left = [];
        const right = [];

        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i] <= pivot) left.push(arr[i]);
            else right.push(arr[i]);
        }

        const leftSorted = quickSort(left);
        const rightSorted = quickSort(right);

        return [...leftSorted, pivot, ...rightSorted];
    }

    return quickSort(num).join('\n');
};

console.log(solution(input)); // 메모리 초과