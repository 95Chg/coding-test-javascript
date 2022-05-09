function solution(numbers) {
    const nums = numbers.map((el) => String(el))
                        .sort((a, b) => (b + a) - (a + b));
    return nums[0] === '0' ? '0' : nums.join('');
}