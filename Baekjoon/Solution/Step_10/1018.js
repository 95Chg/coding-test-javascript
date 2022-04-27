const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(file).toString().trim().split('\n');

const solution = (arr) => {
    const [height, width] = arr.shift().split(' ').map(Number);
    const board = arr;
    const answer = [];

    function checkBlackFirst(h, w) {
        const blackCase = ['BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB'];
        let count = 0;

        for (let i = h; i < h + 8; i += 1) {
            for (let j = w; j < w + 8; j += 1) {
                if (board[i][j] !== blackCase[i - h][j - w]) count++;
            }
        }

        return count;
    };

    function checkWhiteFirst(h, w) {
        const whiteCase = ['WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW', 'WBWBWBWB', 'BWBWBWBW'];
        let count = 0;

        for (let i = h; i < h + 8; i += 1) {
            for (let j = w; j < w + 8; j += 1) {
                if (board[i][j] !== whiteCase[i - h][j - w]) count++;
            }
        }

        return count;
    };

    for (let i = 0; i <= height - 8; i += 1) {
        for (let j = 0; j <= width - 8; j += 1) {
            answer.push(checkBlackFirst(i, j));
            answer.push(checkWhiteFirst(i, j));
        }
    }

    return Math.min(...answer);
}

console.log(solution(input));