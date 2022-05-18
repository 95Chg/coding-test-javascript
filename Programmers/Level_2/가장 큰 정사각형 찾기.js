function solution(board) {
    const [width, height] = [board[0].length, board.length];

    for (let row = 1; row < height; row += 1) {
        for (let col = 1; col < width; col += 1) {
            if (board[row][col] !== 0) {
                board[row][col] =
                    Math.min(
                        board[row - 1][col - 1],
                        board[row - 1][col],
                        board[row][col - 1]
                    ) + 1;
            }
        }
    }

    let answer = 0;
    for (let row of board) {
        if (answer < Math.max(...row)) answer = Math.max(...row);
    }

    return answer ** 2;
}
