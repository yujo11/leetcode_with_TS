// solution 1
// Fail: Time Limit Exceeded
// function maxSubArray(nums: number[]): number {
//   let max = Number.MIN_SAFE_INTEGER

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0

//     for (let j = i; j < nums.length; j++) {
//       sum += nums[j]
//       max = Math.max(max, sum)
//     }
//   }

//   return max
// }

function maxSubArray(nums: number[]): number {
  let max = Number.MIN_SAFE_INTEGER
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    max = Math.max(max, sum)

    if (sum < 0) {
      sum = 0
    }
  }

  return max
}

describe('maxSubArray', () => {
  it('case 1', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    const result = maxSubArray(nums)

    expect(result).toEqual(6)
  })

  it('case 2', () => {
    const nums = [1]
    const result = maxSubArray(nums)

    expect(result).toEqual(1)
  })

  it('case 3', () => {
    const nums = [5, 4, -1, 7, 8]
    const result = maxSubArray(nums)

    expect(result).toEqual(23)
  })

  it('edge case 1', () => {
    const nums = [-1]
    const result = maxSubArray(nums)

    expect(result).toEqual(-1)
  })
})
