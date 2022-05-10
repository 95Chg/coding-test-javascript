function solution(d, budget) {
    let answer = 0;
    let remain = budget;
    d.sort((a, b) => a - b)
     .forEach((el) => {
                if (remain >= el) {
                    remain -= el;
                    answer += 1;
                }        
            }
        );
    
    return answer;
}