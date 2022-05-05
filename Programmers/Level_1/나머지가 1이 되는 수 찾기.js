function solution(n) {
    const answer = [];
    for (let i = n - 1; i >= 2; i -= 1) {
        if (n % i === 1) answer.push(i);
    }
    
    return Math.min.apply(null, answer);
}