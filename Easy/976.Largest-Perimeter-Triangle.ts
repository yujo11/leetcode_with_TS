function largestPerimeter(nums: number[]): number {
  nums = nums.sort((a, b) => a - b)

  for (let i = nums.length; i > 1; i--) {
    const [a, b, c] = nums.slice(i - 3)

    if (a + b > c) {
      return a + b + c
    }
  }

  return 0
}
