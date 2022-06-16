function solution(n, left, right) {
    const arr = [];
    for (let i = left; i <= right; i += 1) {
        const x = Math.floor(i / n) + 1;
        const y = (i % n) + 1
        arr.push(Math.max(x, y));
    }

    return arr;
}

/*
규칙 1 ~ 2
[1, 2, 3]
[2, 2, 3]
[3, 3, 3]

규칙 3
[1, 2, 3][2, 2, 3][3, 3, 3]

규칙 4
[3, 2, 2, 3]

2일 때 좌표 (1, 3) => 3
3일 때 좌표 (2, 1) => 2
4일 때 좌표 (2, 2) => 2
5일 때 좌표 (2, 3) => 3
a일 때 좌표 (a / n의 정수값 + 1, a / n의 나머지 + 1)

좌표가 (x, y)일 때 값은 x와 y 중 큰 값이 됨
*/