function solution(n) {
    let answer = 0;
    
    for (let i = 1; i * i <= n; i++) {
        if (i * i === n) answer = (i + 1) * (i + 1)
        else answer = -1;
    }
    
    return answer;
};