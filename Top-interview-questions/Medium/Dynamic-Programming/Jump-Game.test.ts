function canJump(nums: number[]): boolean {
  if (nums.length === 1) return true

  let currentIndex = 0
  for (let i = 0; i < nums.length; i++) {
    if (currentIndex < i) return false

    currentIndex = Math.max(currentIndex, i + nums[i])
  }

  return true
}

describe('canJump', () => {
  test('case 1', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true)
  })

  test('case 2', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false)
  })
})
