// Solution 1

function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        continue
      }

      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// Solution 2

function twoSum2(nums: number[], target: number): number[] {
  const map = new Map<number, number>()

  for (let i = 0; i < nums.length; i++) {
    const value = target - nums[i]

    if (map.has(value)) {
      return [map.get(value), i]
    }

    map.set(nums[i], i)
  }
}
