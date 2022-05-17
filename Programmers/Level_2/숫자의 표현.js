function solution(n) {
    const answer = [];
    
    for(let i = 1; i <= Math.floor(n / 2); i += 1) {
        let sum = 0;
        const temp = [];
        for(let j = i; sum <= n; j += 1) {
            sum += j;
            temp.push(j);
            if(sum === n) {
                answer.push(temp);
                break;
            }
        }
    }
    
    answer.push([n]);
    
    return answer.length;
}