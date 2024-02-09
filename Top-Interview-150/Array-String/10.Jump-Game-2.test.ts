function jump(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i - 1])
  }

  let index = 0
  let answer = 0

  while (index < nums.length - 1) {
    index += nums[index]
    answer++
  }

  return answer
}

describe('jump', () => {
  test('case 1', () => {
    expect(jump([2, 3, 1, 1, 4])).toBe(2)
  })

  test('case 2', () => {
    expect(jump([2, 3, 0, 1, 4])).toBe(2)
  })
})
