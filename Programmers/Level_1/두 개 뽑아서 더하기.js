function solution(numbers) {
    const answer = [];
    for (let i = 0; i < numbers.length; i += 1) {
        for (let j = i + 1; j < numbers.length; j += 1) {
            answer.push(numbers[i] + numbers[j])
        }
    }
    
    return [...new Set(answer)].sort((a, b) => a - b);
}