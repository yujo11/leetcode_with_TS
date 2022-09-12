function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      map.set(nums[i], map.get(nums[i])! + 1)
    } else {
      map.set(nums[i], 1)
    }
  }

  return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])
    .map((item) => item[0])
    .slice(0, k)
}

describe('top k frequent elements', () => {
  it('case 1', () => {
    expect(topKFrequent([1, 1, 1, 2, 2, 3], 2)).toEqual([1, 2])
  })

  it('case 2', () => {
    expect(topKFrequent([1], 1)).toEqual([1])
  })
})
