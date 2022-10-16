/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let l = m - 1
  let r = n - 1

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (r < 0) break

    if (l >= 0 && nums1[l] > nums2[r]) {
      nums1[i] = nums1[l--]
    } else {
      nums1[i] = nums2[r--]
    }
  }
}

describe('merge', () => {
  test('case 1', () => {
    const nums1 = [1, 2, 3, 0, 0, 0]
    const m = 3
    const nums2 = [2, 5, 6]
    const n = 3

    merge(nums1, m, nums2, n)

    expect(nums1).toEqual([1, 2, 2, 3, 5, 6])
  })

  test('case 2', () => {
    const nums1 = [1]
    const m = 1
    const nums2: number[] = []
    const n = 0

    merge(nums1, m, nums2, n)

    expect(nums1).toEqual([1])
  })

  test('case 3', () => {
    const nums1 = [0]
    const m = 0
    const nums2 = [1]
    const n = 1

    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([1])
  })

  test('edge case 1', () => {
    const nums1 = [-1, 0, 0, 3, 3, 3, 0, 0, 0]
    const m = 6
    const nums2 = [1, 2, 2]
    const n = 3

    merge(nums1, m, nums2, n)
    expect(nums1).toEqual([-1, 0, 0, 1, 2, 2, 3, 3, 3])
  })
})
