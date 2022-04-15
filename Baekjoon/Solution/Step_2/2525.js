let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let curHour = Number(input[0].split(' ')[0]);
let curMin = Number(input[0].split(' ')[1]);
let cookTime = Number(input[1]);

solution(curHour, curMin, cookTime);

function solution(inputHour, inputMin, cookTime) {
    const doneMin = parseInt((inputHour * 60 + inputMin + cookTime) % 60);
    const doneHour = parseInt((inputHour * 60 + inputMin + cookTime) / 60);

    if (doneHour >= 24) {
        console.log(doneHour % 24, doneMin);
    } else {
        console.log(doneHour, doneMin);
    }
}