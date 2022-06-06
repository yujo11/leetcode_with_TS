function intersect(nums1: number[], nums2: number[]): number[] {
  if (nums1.length < nums2.length) {
    return intersect(nums2, nums1)
  }

  const result = []

  const obj = nums1.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
  }, {})

  for (let i = 0; i < nums2.length; i++) {
    if (obj[nums2[i]]) {
      result.push(nums2[i])
      obj[nums2[i]]--
    }
  }

  return result
}

// test code

console.log(intersect([1, 2, 2, 1], [2, 2])) // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])) // [4, 9]
