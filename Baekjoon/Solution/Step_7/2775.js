const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n').map(Number);

const solution = (input) => {
    const testCase = input[0];

    for (let i = 0; i < testCase; i++) {
        const houseFloor = input[i * 2 + 1];
        const houseNumber = input[i * 2 + 2];
        const house = Array.from(Array(houseFloor + 1), () => Array(houseNumber + 1).fill(0)); // 2차원배열로 층별 거주민 배열 초기값 설정

        for (let i = 0; i <= houseNumber; i++) {
            house[0][i] = i; // 0층 거주민 계산
        }

        for (let i = 1; i <= houseFloor; i++) {
            for(let j = 1; j <= houseNumber; j++) { // 1층부터 각 호수의 거주민을 계산함
                house[i][j] = house[i][j - 1] + house[i - 1][j]; // i층 j호수는 i층 j-1호수 + i-1층 j호수 거주민의 합과 같음
            }
        }
        
        const answer = house[houseFloor][houseNumber];
        console.log(answer);
    }

}

solution(input);