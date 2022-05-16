function solution(n) {
    const fibonacci = (num) => {
        // 피보나치 배열을 미리 생성
        const fibonacciArr = [0, 1, ...Array(num - 1).fill(0)];
        // 저장된 값으로 부터 피보나치 계산
        for (let i = 2; i <= num; i += 1) {
            fibonacciArr[i] = (fibonacciArr[i - 1] + fibonacciArr[i - 2]) % 1234567;
        }
        
        return fibonacciArr[num];
    };
    
    return fibonacci(n);
}