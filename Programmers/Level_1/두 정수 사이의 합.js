function solution(a, b) {
    if (a === b) return a;
    
    let answer = 0;
    if (a < b) {
        for (let i = a; i <= b; i += 1) answer += i;
    } else {
        for (let i = b; i <= a; i += 1) answer += i;
    }
    
    return answer;
}