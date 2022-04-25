const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = Number(fs.readFileSync(file).toString().trim());

const makingStars = (i, j, num) => {
    let stars = '';
    if (i % 3 === 1 && j % 3 === 1) stars += ' ';
    else {
        if (num === 1) stars += '*';
        else stars += makingStars(parseInt(i / 3), parseInt(j / 3), parseInt(num / 3));
    }

    return stars;
};

const printingStars = (num) => {   
    let answer = '';

    for (let i = 0; i < num; i += 1) {
        for (let j = 0; j < num; j += 1){
            answer += makingStars(i, j, num);
        }
        
        answer += '\n';
    }

    return answer;
};

console.log(printingStars(input));

///////////////////////////////////////////////////////////////////////////////////////////

let starArr = [];
let answer = "";

function makeStar (num) {
    if (num === 3) {
        starArr[0] = "***";
        starArr[1] = "* *";
        starArr[2] = "***";
    } else {
        let starArrTemp = makeStar(num / 3).concat();

        for (let i = 0; i < num; i++) {
            let idx = i % (num / 3);

            if (Math.floor(i / (num / 3)) == 1) {
                starArr[i] = starArrTemp[idx] + starArrTemp[idx].replaceAll("*", " ") + starArrTemp[idx];
            } else {
                starArr[i] = starArrTemp[idx] + starArrTemp[idx] + starArrTemp[idx];
            }
        }

    }

    return starArr;
};

makeStar(input);

for (let i = 0; i < starArr.length; i++) {
    answer += `${starArr[i]}\n`;
}

console.log(answer.trim());