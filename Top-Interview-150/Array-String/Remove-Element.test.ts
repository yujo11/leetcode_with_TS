/**
 * Solution 1. Two pointers
 * Time O(N)
 * Space O(1)
 */
function removeElement(nums: (number | '_')[], val: number): number {
  let writer = 0

  for (let reader = 0; reader < nums.length; reader++) {
    if (nums[reader] !== val) {
      nums[writer++] = nums[reader]
    }
  }

  return writer
}

describe('Remove Element', () => {
  test('case 1', () => {
    const nums = [3, 2, 2, 3]
    const val = 3

    expect(removeElement(nums, val)).toBe(2)
  })

  test('case 2', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2]
    const val = 2

    expect(removeElement(nums, val)).toBe(5)
  })
})
