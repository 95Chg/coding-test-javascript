function solution(x) {
    const divisor = x.toString()
                    .split('')
                    .reduce((acc, cur) => Number(acc) + Number(cur));

    return x % divisor === 0 ? true : false;
}