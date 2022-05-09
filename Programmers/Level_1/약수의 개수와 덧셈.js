function solution(left, right) {
    let answer = 0;
    
    const getDivisor = (num) => {
        const divisors = [];
        for (let i = 0; i * i <= num; i += 1) {
            if (num % i === 0) {
                if (num / i === i) divisors.push(i);
                else {
                    divisors.push(i);
                    divisors.push(num / i);
                }
            }
        }
        
        return divisors.length;
    };
    
    for (let i = left; i <= right; i += 1) {
        getDivisor(i) % 2 === 0 ? answer += i : answer -= i;
    }
    
    return answer;
}