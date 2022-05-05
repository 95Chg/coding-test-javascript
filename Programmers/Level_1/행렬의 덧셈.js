function solution(arr1, arr2) {
    const answer = [];
    for (let i = 0; i < arr1.length; i += 1) {
        const temp = [];
        for (let j = 0; j < arr1[0].length; j += 1) {
            temp.push(Number(arr1[i][j]) + Number(arr2[i][j])); 
        }
        
        answer.push(temp);
    }

    return answer;
}