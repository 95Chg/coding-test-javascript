function solution(num) {
    let count = 0;
    
    while (true) {
        if (num === 1) break;
        
        if (num % 2 === 0) {
            num = num / 2;
        } else {
            num = num * 3 + 1;
        }
        
        count += 1;
        
        if (count === 500) {
            count = -1;
            break;
        }
    }
    
    return count;
}