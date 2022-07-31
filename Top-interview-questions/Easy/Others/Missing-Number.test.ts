function missingNumber(nums: number[]): number {
  nums = nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i
    }
  }

  return nums.length
}

describe('missingNumber', () => {
  test('case 1', () => {
    expect(missingNumber([3, 0, 1])).toBe(2)
  })

  test('case 2', () => {
    expect(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])).toBe(8)
  })

  test('case 3', () => {
    expect(missingNumber([0])).toBe(1)
  })
})
