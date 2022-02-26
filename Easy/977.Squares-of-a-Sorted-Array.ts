function sortedSquares(nums: number[]): number[] {
    return nums.map((num) => num * num).sort((a, b) => a - b)
};

// test cases

console.log(sortedSquares([-7, -3, 2, 3, 11])) // [4, 9, 9, 49, 121]