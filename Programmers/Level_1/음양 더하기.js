function solution(absolutes, signs) {
    const answer = [];
    for (let i = 0; i < absolutes.length; i += 1) {
        if(signs[i]) answer.push(absolutes[i]);
        else answer.push(absolutes[i] * -1);
    }
    
    return answer.reduce((acc, cur) => acc + cur, 0);
}