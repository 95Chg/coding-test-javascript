function solution(input){
    let num1 = list[0];
    let num2 = list[1];

    if (num2 - 45 < 0) {
        num2 = 60 + (num2 - 45);
        num1 -= 1;

        if (num1 === -1) num1 = 23;
    } else {
        num2 -= 45;
    }

    console.log(`${num1} ${num2}`)
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input;
let list = [];

rl.on('line', function(line) {
    input = line;
    rl.close();
}).on("close", function() { 
    list = input.split(' ').map((el) => parseInt(el));
    solution(list);
    process.exit();
});