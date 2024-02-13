/**
 * !FAIL Time Limit Exceeded
 */
// function productExceptSelf(nums: number[]): number[] {
//   const results: number[] = [];

//   for (let i = 0; i < nums.length; i++) {
//       results.push([...nums.slice(0, i), ...nums.slice(i + 1, nums.length)].reduce((acc, cur) => (acc *= cur), 1))
//   }

//   return results;
// };

/**
 * My Solution
 */
// function productExceptSelf(nums: number[]): number[] {
//   const hasZero = nums.includes(0)
//   const filteredNums = hasZero ? nums.filter((val) => val !== 0) : nums
//   const results: number[] = []

//   const total = filteredNums.length ? filteredNums.reduce((acc, cur) => (acc *= cur), 1) : 0

//   for (let i = 0; i < nums.length; i++) {
//     if (hasZero && nums[i] !== 0) {
//       results.push(0)
//     } else if (nums[i] === 0) {
//       results.push([...nums.slice(0, i), ...nums.slice(i + 1, nums.length)].reduce((acc, cur) => (acc *= cur), 1))
//     } else {
//       results.push(Math.floor(total / nums[i]))
//     }
//   }

//   return results
// }

/**
 * LeetCode Solution 1. Left and Right product lists
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
// function productExceptSelf(nums: number[]): number[] {
//   const left: number[] = new Array(nums.length).fill(1)
//   const right: number[] = new Array(nums.length).fill(1)
//   const answer: number[] = []

//   for (let i = 1; i < nums.length; i++) {
//     left[i] = left[i - 1] * nums[i - 1]
//   }

//   for (let i = nums.length - 2; i >= 0; i--) {
//     right[i] = nums[i + 1] * right[i + 1]
//   }

//   for (let i = 0; i < nums.length; i++) {
//     answer[i] = left[i] * right[i]
//   }

//   return answer
// }

/**
 * LeetCode Solution 2. O(1) space
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
function productExceptSelf(nums: number[]): number[] {
  const answer = [1]

  for (let i = 1; i < nums.length; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }

  let right = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    answer[i] *= right
    right *= nums[i]
  }

  return answer
}

describe('Product of Array Except Self', () => {
  test('case 1', () => {
    const nums = [1, 2, 3, 4]
    expect(productExceptSelf(nums)).toEqual([24, 12, 8, 6])
  })

  test('case 2', () => {
    const nums = [-1, 1, 0, -3, 3]
    expect(productExceptSelf(nums)).toEqual([0, 0, 9, 0, 0])
  })

  test('case 3', () => {
    const nums = [1, 0]
    expect(productExceptSelf(nums)).toEqual([0, 1])
  })

  test('case 4', () => {
    const nums = [0, 4, 0]
    expect(productExceptSelf(nums)).toEqual([0, 0, 0])
  })
})
