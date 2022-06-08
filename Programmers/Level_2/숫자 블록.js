// 1과 num을 제외한 가장 큰 약수 구하기
const getMaxDivisor = (num) => {
    for (let i = 2; i * i <= num; i += 1) {
        // 가장 작은 값으로 나누면 가장 큰 약수를 반환함
        // 단 블록의 숫자가 최대 10,000,000이므로 최대 약수는 10,000,000이 최대임
        if (num % i === 0 && (num / i) <= 10000000) return num / i
    }

    // num이 소수일 경우 나눠지는 값이 없기 때문에 1을 반환함
    return 1;
};

function solution(begin, end) {
    const answer = Array(end - begin + 1).fill(0);

    for (let i = begin; i <= end; i += 1) {
        answer[i - begin] = getMaxDivisor(i);
    }
    if (begin === 1) answer[0] = 0;

    return answer;
}