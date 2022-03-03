function arraySign(nums: number[]): number {
  if (nums.includes(0)) return 0

  return nums.reduce((acc, cur) => acc * cur) < 0 ? -1 : 1
}
