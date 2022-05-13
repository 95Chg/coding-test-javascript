function solution(lottos, win_nums) {
    const count = [0, 0];
    const answer = [];
    
    for (let i = 0; i < 6; i += 1) {
        if(win_nums.includes(lottos[i])) {
            count[0] = count[0] + 1;
            count[1] = count[1] + 1;
        }
    }
    
    count[0] = count[0] + lottos.filter((el) => !el).length;
    
    count.forEach((num) => {
        if (num === 6) answer.push(1);
        else if (num === 5) answer.push(2);
        else if (num === 4) answer.push(3);
        else if (num === 3) answer.push(4);
        else if (num === 2) answer.push(5);
        else answer.push(6);
    });
    
    return answer;
}