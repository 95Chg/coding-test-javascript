function solution(numbers, target) {
    const answer = [];

    const dfs = (depth, sum, arr) => {
        if (depth === numbers.length) { // 재귀 탈출 구문
            if (sum === target) {
                answer.push(arr);
            }
            return
        }

        dfs(depth + 1, sum + numbers[depth], [...arr, numbers[depth]]);
        dfs(depth + 1, sum - numbers[depth], [...arr, -numbers[depth]]);
    };

    dfs(0, 0, []);

    return answer.length;
}