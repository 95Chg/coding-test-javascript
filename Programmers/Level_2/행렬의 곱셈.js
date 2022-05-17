function solution(arr1, arr2) {
    const answer = [];
    
    const [row, col] = [arr1.length, arr2[0].length]
    for (let i = 0; i < row; i += 1) {
        const temp = [];
        for (let j = 0; j < col; j += 1) {
            temp.push(arr1[i].reduce((sum, cur, idx) => sum + (cur * arr2[idx][j]), 0));
        }
        
        answer.push(temp);
    }
    
    return answer;
}