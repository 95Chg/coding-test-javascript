function solution(n) {
    const getDivisors = (num) => {
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
        
        return divisors;
    };
    
    return getDivisors(n).reduce((acc, cur) => acc + cur, 0);
}