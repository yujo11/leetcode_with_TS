/**
 * My Solution
 */
function canJump1(nums: number[]): boolean {
  let position = nums[0]

  for (let i = 1; i < nums.length; i++) {
    if (position < i) {
      return false
    }

    position = Math.max(position, nums[i] + i)
  }

  return true
}

/**
 * LeetCode Solution 01. Backtracking
 */
function canJumpFromPosition(position: number, nums: number[]): boolean {
  if (position === nums.length - 1) {
    return true
  }

  const furthestJump = Math.min(position + nums[position], nums.length - 1)
  for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
    if (canJumpFromPosition(nextPosition, nums)) {
      return true
    }
  }

  return false
}

function canJump2(nums: number[]): boolean {
  return canJumpFromPosition(0, nums)
}

/**
 * LeetCode Solution 02. Dynamic Programming Top-Down
 */
function canJumpFromPosition2(position: number, nums: number[], memo: number[]): boolean {
  if (memo[position] !== 0) {
    return memo[position] === 1
  }

  const furthestJump = Math.min(position + nums[position], nums.length - 1)
  for (let nextPosition = position + 1; nextPosition <= furthestJump; nextPosition++) {
    if (canJumpFromPosition2(nextPosition, nums, memo)) {
      memo[position] = 1
      return true
    }
  }

  memo[position] = -1
  return false
}

function canJump(nums: number[]): boolean {
  const memo = new Array(nums.length).fill(0)
  memo[nums.length - 1] = 1
  return canJumpFromPosition2(0, nums, memo)
}

describe('Jump Game', () => {
  test('case 1', () => {
    expect(canJump([2, 3, 1, 1, 4])).toBe(true)
  })

  test('case 2', () => {
    expect(canJump([3, 2, 1, 0, 4])).toBe(false)
  })
})
