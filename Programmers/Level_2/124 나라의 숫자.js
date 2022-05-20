function solution(n) {
    const country = ['4', '1', '2'];

    let answer = '';
    while (n > 0) {
        const remain = n % 3;
        answer = country[remain] + answer;
        n = Math.floor((n - 1) / 3);
    }

    return answer;
}
