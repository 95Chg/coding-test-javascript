function solution(A,B){
    let answer = 0;
    
    B.sort((a, b) => b - a);
    A.sort((a, b) => a - b)
     .forEach((v, i) => {
        answer += v * B[i]
    });
    
    return answer;
}