class Solution {
  array: number[]
  shuffleArray: number[]

  constructor(nums: number[]) {
    this.array = nums
  }

  reset(): number[] {
    return this.array
  }

  shuffle(): number[] {
    this.shuffleArray = this.array.slice()

    for (let i = 0; i < this.array.length; i++) {
      const randomIndex = Math.floor(Math.random() * this.array.length)

      const temp = this.shuffleArray[i]
      this.shuffleArray[i] = this.shuffleArray[randomIndex]
      this.shuffleArray[randomIndex] = temp
    }
    return this.shuffleArray
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

describe('Solution', () => {
  test('case 1', () => {
    const solution = new Solution([1, 2, 3])

    expect(solution.shuffle()).not.toEqual([1, 2, 3])

    expect(solution.reset()).toEqual([1, 2, 3])
  })
})
