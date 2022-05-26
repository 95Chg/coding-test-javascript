function solution(s) {
    const stack = [];

    if (s.length % 2 !== 0) return 0;

    for (let i = 0; i < s.length; i += 1) {
        stack[stack.length - 1] === s[i]
            ? stack.pop()
            : stack.push(s[i]);
    }

    return stack.length === 0 ? 1 : 0;
}