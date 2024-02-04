/**
 Do not return anything, modify nums in-place instead.
 */
/**
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

/**
 * My Solution
 */
function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    nums.unshift(nums.pop() as number)
  }
}

describe('Rotate Array', () => {
  test('case 1', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7]
    const k = 3

    rotate(nums, k)

    expect(nums).toStrictEqual([5, 6, 7, 1, 2, 3, 4])
  })

  test('case 2', () => {
    const nums = [-1, -100, 3, 99]
    const k = 2

    rotate(nums, k)

    expect(nums).toStrictEqual([3, 99, -1, -100])
  })

  test('case 3', () => {
    const nums = [1, 2]
    const k = 5

    rotate(nums, k)

    expect(nums).toStrictEqual([2, 1])
  })
})
