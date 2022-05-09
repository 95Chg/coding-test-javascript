function solution(answers) {
    const student1 = [1, 2, 3, 4, 5] // 5
    const student2 = [2, 1, 2, 3, 2, 4, 2, 5]; // 8
    const student3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 10
    const answer = [];
    const scores = [0, 0, 0]
    
    for (let i = 0; i < answers.length; i += 1){
        if (answers[i] === student1[i % student1.length]) scores[0]++;
        if (answers[i] === student2[i % student2.length]) scores[1]++;
        if (answers[i] === student3[i % student3.length]) scores[2]++;
    }
    
    for (let i = 0; i < 3; i += 1) {
        if (scores[i] === Math.max(...scores)) answer.push(i + 1);
    }
    
    return answer;
}