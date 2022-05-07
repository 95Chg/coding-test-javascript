function solution(n) {
    // n개 만큼의 배열을 구현하고 0과 1은 소수가 아니기 때문에 미리 false로 고정함.
    const primeNumberList = [false, false, ...Array(n - 1).fill(true)]; 
    
    // 에라토스테네스의 체 구현
    for (let i = 2; i * i <= n; i += 1) {
        if(primeNumberList[i]) {
            for (let j = i * 2; j <= n; j += i) {
                primeNumberList[j] = false;
            }
        }
    }
    //소수를 반환 할 때
    //return primeNumberList.flatMap((v, i) => (v ? i : []));

    //소수의 갯수를 반환 할 때
    return primeNumberList.filter(Boolean).length;
}