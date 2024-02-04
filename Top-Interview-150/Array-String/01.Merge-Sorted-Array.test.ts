//

/**
 * Solution 1. Sorting
 * Time O(n)
 * Space O(1)
 */

/**
 Do not return anything, modify nums1 in-place instead.
 */
// function merge(nums1: number[], m: number, nums2: number[], n: number): void {
//   for (let i = 0; i < n; i++) {
//     nums1[m + i] = nums2[i]
//   }

//   nums1.sort((a, b) => a - b)
// }

/**
 * Solution 2. Three pointers
 * Time O(M + N)
 * Space O(1)
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let r1: number = m - 1
  let r2: number = n - 1

  for (let i = m + n - 1; i >= 0; i--) {
    if (r1 >= 0 && r2 >= 0) {
      nums1[i] = nums1[r1] > nums2[r2] ? nums1[r1--] : nums2[r2--]
    } else if (r1 >= 0) {
      nums1[i] = nums1[r1--]
    } else {
      nums1[i] = nums2[r2--]
    }
  }
}

describe('Merged Sorted Array', () => {
  test('case 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const m = 3
    const nums2 = [2, 5, 6]
    const n = 3

    merge(nums1, m, nums2, n)

    expect(nums1).toStrictEqual([1, 2, 2, 3, 5, 6])
  })

  test('case 2', () => {
    const nums1 = [1]
    const m = 1
    const nums2: number[] = []
    const n = 0

    merge(nums1, m, nums2, n)

    expect(nums1).toStrictEqual([1])
  })

  test('case 3', () => {
    const nums1 = [0]
    const m = 0
    const nums2 = [1]
    const n = 1

    merge(nums1, m, nums2, n)

    expect(nums1).toStrictEqual([1])
  })
})
