const isPrime = (num) => {
    if (num === 0 || num === 1) return false;

    for (let i = 2; i * i <= num; i += 1) {
        if (num % i === 0) return false;
    }

    return true;
};

function solution(n, k) {
    let count = 0;
    n.toString(k)
        .split(/0{1,}/)
        .map((str) => Number(str))
        .forEach((num) => {
            isPrime(num) ? count += 1 : null
        });

    return count;
}