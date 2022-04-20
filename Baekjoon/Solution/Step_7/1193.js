const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim();

const solution1 = (input) => {
    const upNums = [];
    const downNums = [];
    const number = Number(input);
    let target = number
    let group = 0;

    while(target > 0) {
        group += 1;
        target -= group;
    }

    target = group + target;
    
    for (let i = 0; i < group; i++){
        upNums.push(i + 1);
        downNums.push(group - i);  
    }
    
    console.log(`${number}는 ${group}번째 그룹의 ${target}번째 수`);

    group % 2 === 0 
    ? console.log(`${upNums[target - 1]}/${downNums[target - 1]}`)
    : console.log(`${downNums[target - 1]}/${upNums[target - 1]}`)
}

solution1(input);

const solution2 = (input) => {
    const number = Number(input);
    let target = number
    let group = 0;

    while(target > 0) {
        group += 1;
        target -= group;
    }

    target = group + target;

    group % 2 === 0 
    ? console.log(`${target}/${group - target + 1}`)
    : console.log(`${group - target + 1}/${target}`)
}

solution2(input);

/*

1/1				                Group 1 (Group 홀수) (분자 다운, 분모 업)
 1
1/2, 2/1				        Group 2 (Group 짝수) (분자 업, 분모 다운)
 2    3
3/1, 2/2, 1/3			        Group 3 (Group 홀수) (분자 다운, 분모 업)
 1    2    3     
1/4, 2/3, 3/2, 4/1			    Group 4 (Group 짝수) (분자 업, 분모 다운)
 1    2    3    4
5/1, 4/2, 3/3, 2/4, 5/1 		Group 5 (Group 홀수) (분자다운, 분모 업)
 1    2    3    4    5

 */