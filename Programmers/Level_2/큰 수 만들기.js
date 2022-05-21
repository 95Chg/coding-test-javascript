function solution(number, k) {
    const stack = [];
    let count = 0;

    for (let num of number) {
        while (count < k && stack[stack.length - 1] < num) {
            stack.pop();
            count += 1;
        }

        stack.push(num);
    }

    while (count < k) {
        stack.pop();
        count += 1;
    }

    return stack.join('');
}
