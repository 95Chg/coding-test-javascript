function solution(n) {
    const oneCount = n.toString(2).match(/1/g).length;
    let answer = 0;

    for (let i = n + 1; i <= 1000000; i += 1) {
        if (oneCount === i.toString(2).match(/1/g).length) {
            answer = i;
            break;
        }
    }

    return answer;
}
