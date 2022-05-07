function solution(arr) {
    const answer = [];
    for (let i = 0; i < arr.length; i += 1) {
        if (!answer) answer.push(arr[i]);
        else {
            if(answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
        }
    }
    
    return answer;
}