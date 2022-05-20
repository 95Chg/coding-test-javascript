function solution(brown, yellow) {
    const total = brown + yellow;

    const getDivisor = (num) => {
        const divisor = [];
        for (let i = 1; i * i <= num; i += 1) {
            if (num % i === 0) {
                if (num / i === i) divisor.push(i);
                else {
                    divisor.push(i);
                    divisor.push(num / i);
                }
            }
        }

        return divisor.sort((a, b) => a - b);
    };

    const answer = [];
    for (let num of getDivisor(total)) {
        let width = num;
        let height = (brown - 2 * num + 4) / 2;
        if ((width - 2) * (height - 2) === yellow && width >= height) {
            answer.push(width);
            answer.push(height);
        }
    }

    return answer;
}
