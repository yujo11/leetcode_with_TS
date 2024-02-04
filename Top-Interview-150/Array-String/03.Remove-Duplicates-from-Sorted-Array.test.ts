/**
 * Solution 1. Set
 * Time O(N)
 * Space O(N)
 */

// function removeDuplicates(nums: number[]): number {
//   return new Set(nums).size
// }

/**
 * Solution 2. Two pointers
 * Time O(N)
 * Space O(1)
 */
function removeDuplicates(nums: number[]): number {
  let writer = 0

  for (let reader = 1; reader < nums.length; reader++) {
    if (nums[writer] !== nums[reader]) {
      nums[++writer] = nums[reader]
    }
  }

  return writer + 1
}

describe('Remove Duplicates from Sorted Array', () => {
  test('case 1', () => {
    const nums = [1, 1, 2]

    expect(removeDuplicates(nums)).toBe(2)
  })

  test('case 2', () => {
    const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

    expect(removeDuplicates(nums)).toBe(5)
  })
})
