function solution(nums) {
    const answer = [];
    
    const isPrimeNumber = (num) => {
        for (let i = 2; i * i <= num; i += 1) {
            if (num % i === 0) return false;
        }
        
        return true;
    };
    
    for (let i = 0; i < nums.length; i += 1) {
        for (let j = i + 1; j < nums.length; j += 1) {
            for (let k = j + 1; k < nums.length; k += 1) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrimeNumber(sum)) answer.push(sum);
            }
        }
    }
    
    return answer.length;
}