function solution(board, moves) {
    let count = 0;
    const basket = [];
    
    for (let i = 0; i < moves.length; i += 1) {
        const target = moves[i] - 1;
        const temp = board;
        for (let j = 0; j < board.length; j += 1) {
            if (temp[j][target]) {
                basket.push(temp[j][target]);
                temp[j][target] = 0;
                break;
            }
        }
    }
    
    for (let i = 0; i < basket.length; i += 1) {
        if(basket[i] === basket[i - 1]) {
            count += 2;
            basket.splice(i - 1, 2);
            i -= 2
        }
    }
    
    return count;
}