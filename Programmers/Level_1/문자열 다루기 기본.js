function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    
    for (let i = 0; i < s.length; i += 1) {
        if (!Number.isInteger(parseInt(s[i]))) return false;
    }
    
    return true;
}