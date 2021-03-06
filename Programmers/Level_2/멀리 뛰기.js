function solution(n) {
    // 피보나치 수열 dp 구현
    const fibonacciArr = [1, 1, ...Array(n - 1).fill(0)];
    for (let i = 2; i <= n; i += 1) {
        fibonacciArr[i] = (fibonacciArr[i - 2] + fibonacciArr[i - 1]) % 1234567
    }

    return fibonacciArr[n]
}

/*
n = 1
[(1)] => 1

n = 2
[(1, 1), (2)] => 2

n = 3
[(1, 1, 1), (2, 1), (1, 2)] => 3

n = 4
[(1, 1, 1, 1), (2, 1, 1), (1, 2, 1), (1, 1, 2), (2, 2)] => 5

n = 5
[(1, 1, 1, 1, 1), (2, 1, 1, 1), (1, 2, 1, 1), (1, 1, 2, 1),
(1, 1, 1, 2), (2, 2, 1), (2, 1, 2), (1, 2, 2)] => 8

n = 6
[(1, 1, 1, 1, 1, 1), (2, 1, 1, 1, 1), (1, 2, 1, 1, 1), (1, 1, 2, 1, 1), (1, 1, 1, 2, 1), 
(1, 1, 1, 1, 2), (2, 2, 1, 1), (2, 1, 2, 1), (2, 1, 1, 2), (1, 2, 2, 1),
(1, 2, 1, 2), (1, 1, 2, 2), (2, 2, 2)] => 13
*/