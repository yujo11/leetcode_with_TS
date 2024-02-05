/**
 * My Solution
 */
// function canJump(nums: number[]): boolean {
//   let position = nums[0]

//   for (let i = 1; i < nums.length; i++) {
//     if (position < i) {
//       return false
//     }

//     position = Math.max(position, nums[i] + i)
//   }

//   return true
// }

/**
 * Youtube Solution
 * - https://www.youtube.com/watch?v=Zb4eRjuPHbM
 */

function canJump(nums: number[]): boolean {
  let lastPosition = nums.length - 1

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i + nums[i] >= lastPosition) {
      lastPosition = i
    }
  }

  return lastPosition === 0
}

/**
 * LeetCode Solution 01. Backtracking
 */
// function canJumpFromPosition(position: number, nums: number[]): boolean {
//   if (position === nums.length - 1) {
//     return true
//   }

//   const furthestJump = Math.min(position + nums[position], nums.length - 1)
//   for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
//     if (canJumpFromPosition(nextPosition, nums)) {
//       return true
//     }
//   }

//   return false
// }

// function canJump(nums: number[]): boolean {
//   return canJumpFromPosition(0, nums)
// }

/**
 * LeetCode Solution 02. Dynamic Programming Top-Down
 */
// function canJumpFromPosition(position: number, nums: number[], memo: number[]): boolean {
//   if (memo[position] !== 0) {
//     return memo[position] === 1
//   }

//   const furthestJump = Math.min(position + nums[position], nums.length - 1)
//   for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
//     if (canJumpFromPosition(nextPosition, nums, memo)) {
//       memo[position] = 1
//       return true
//     }
//   }

//   memo[position] = -1
//   return false
// }

// function canJump(nums: number[]): boolean {
//   const memo = new Array(nums.length).fill(0)
//   memo[nums.length - 1] = 1
//   return canJumpFromPosition(0, nums, memo)
// }

describe('Jump Game', () => {
  test('case 1', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true)
  })

  test('case 2', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false)
  })
})
