function solution(w, h) {
    const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);
    
    return (w * h) - (w + h - getGCD(w, h))
}