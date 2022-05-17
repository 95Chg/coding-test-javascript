function solution(s) {
    const numberArr = s.split(' ').map((el) => Number(el)).sort((a, b) => a - b);

    return [numberArr.shift(), numberArr.pop()].join(' ');
}