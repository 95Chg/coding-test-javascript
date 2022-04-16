const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(file).toString().split('\n');

const arr1 = input[0];
const arr2 = input[1].split(' ');
const arrayLength = parseInt(arr1.split(' ')[0]);
const sortingSize = parseInt(arr1.split(' ')[1]);


solution(arr2, sortingSize);

function solution(arr, x) {
    let answer = '';
    x = sortingSize;
    for (let i = 0; i < arrayLength; i++) {
        let number = parseInt(arr[i]);
        if (number < x) {
            answer += number + ' ';
        } 
    }

    console.log(answer);
}