function solution(numbers) {
    const target = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    
    for (let i = 0; i < numbers.length; i += 1) {
        if (target.includes(numbers[i])) {
            target.splice(target.indexOf(numbers[i]), 1)
        }
    }
    
    return target.reduce((acc, cur) => acc + cur, 0)
}