function solution(n) {
    let dp = [1, 1, ...Array(n).fill(0)];
    for (let i = 2; i <= n; i += 1) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % 1000000007;
    }

    return dp[n]
}