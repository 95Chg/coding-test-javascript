function solution(n, arr1, arr2) {
    const answer = [];
    for (let i = 0; i < n; i += 1) {
        let row = (arr1[i] | arr2[i]).toString(2).padStart(n, 0);
        row = row.replace(/1/g, '#');
        row = row.replace(/0/g, ' ');
        answer.push(row);
    }
    
    return answer;
}