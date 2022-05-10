function solution(nums) {
    const mons = new Set(nums);
    return mons.size > (nums.length / 2) ? (nums.length / 2) : mons.size;
}