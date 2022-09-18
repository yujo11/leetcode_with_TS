/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let pos = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[pos++] = nums[i]
    }
  }

  for (let i = pos; i < nums.length; i++) {
    nums[i] = 0
  }
}

describe('moveZeroes', () => {
  test('case 1', () => {
    const nums = [0, 1, 0, 3, 12]

    moveZeroes(nums)

    expect(nums).toBe([1, 3, 12, 0, 0])
  })

  test('case 2', () => {
    const nums = [0]

    moveZeroes(nums)

    expect(nums).toBe([0])
  })
})
