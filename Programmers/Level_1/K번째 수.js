function solution(array, commands) {
    let answer = [];
    
    commands.forEach(([i, j, k]) => {
        const temp = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]
        // console.log(temp);
        answer.push(temp);
    })
    
    // console.log(answer);
    return answer;
}