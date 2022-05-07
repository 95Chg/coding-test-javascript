function solution(arr, divisor) {
    const answer = [];
    
    arr.forEach((num) => {if (num % divisor === 0) answer.push(num)});
    
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
}