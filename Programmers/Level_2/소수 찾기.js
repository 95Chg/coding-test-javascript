function solution(numbers) {
    const numberArr = numbers.split('');

    const permutations = (arr, n) => {
        // 1개만 뽑는다면 그대로 순열을 반환하며, 탈출 조건으로 사용함
        if (n === 1) return arr.map((num) => [num]);
        const result = [];

        arr.forEach((fixed, idx, arr) => {
            // index는 선택된 요소로 index를 제외한 요소를 추출함
            const rest = arr.filter((_, index) => index !== idx);
            // 선택된 요소를 제외하고 재귀 호출함
            const perms = permutations(rest, n - 1);
            // 선택된 요소와 재귀 반환값을 합침
            const combine = perms.map((value) => [fixed, ...value]);
            // 결과 값을 추가함
            result.push(...combine);
        });
        // 순열 반환
        return result;
    };

    // 뽑을 수 있는 모든 숫자를 중복을 제거한 Set으로 설정
    const permsArr = new Set();
    for (let n = 1; n <= numberArr.length; n += 1) {
        const perms = permutations(numberArr, n).map((nums) => Number(nums.join('')));
        for (const perm of perms) permsArr.add(perm);
    }

    // 소수 판별
    const isPrime = (num) => {
        const prime = [false, false, ...Array(num - 1).fill(true)];

        //에라토스테네스의 체
        for (let i = 2; i * i <= num; i += 1) {
            if (prime[i]) {
                for (let j = i * 2; j <= num; j += i) {
                    prime[j] = false;
                }
            }
        }

        return prime;
    };

    // 가장 큰 수까지의 소수 배열 계산함
    const primeArr = isPrime(Math.max(...permsArr));

    // 해당 숫자가 소수인지 판별함
    let answer = 0;
    permsArr.forEach((num) => {
        if (primeArr[num]) answer += 1
    });

    return answer;
}