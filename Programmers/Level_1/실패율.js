function solution(N, stages) {
    const answer = [];
    const percent = new Map();
    
    for (let i = 1; i < N + 1; i += 1) {
        const temp = stages.sort((a , b) => a - b);
        percent.set(i, [...temp].filter((el) => el === i).length / temp.length);
        temp.splice(0, [...temp].filter((el) => el === i).length);
    }
    
    const sortedPercent = [...percent].sort((a, b) => b[1] - a[1]);
    for (let percent of sortedPercent) {
        answer.push(percent[0]);
    }
    
    return answer;
}