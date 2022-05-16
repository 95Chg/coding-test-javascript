function solution(arr) {
    const getGCD = (a, b) => a % b === 0 ? b : getGCD(b, a % b);
    const getLCM = (a, b) => a * b / getGCD(a, b);
    
    return arr.reduce((acc, cur) => getLCM(acc, cur), 1);
}