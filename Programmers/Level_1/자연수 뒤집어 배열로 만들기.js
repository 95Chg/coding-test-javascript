function solution(n) {
    const answer = [];
    String(n)
        .split('')
        .reverse()
        .forEach((el) => answer.push(Number(el)));
    
    return answer;
}