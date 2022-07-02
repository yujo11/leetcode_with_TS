/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (m === 0) {
    nums1 = nums2
    return
  }

  let i = m - 1
  let j = n - 1
  let k = m + n - 1

  console.log(nums1)

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]
      i--
    } else {
      nums1[k] = nums2[j]
      j--
    }
    k--
  }

  console.log('123')
}

describe('merge', () => {
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
    const nums2 = []
    const n = 0

    merge(nums1, m, nums2, n)

    expect(nums1).toStrictEqual([1])
  })

  test.only('case 3', () => {
    const nums1 = [0]
    const m = 0
    const nums2 = [1]
    const n = 1

    merge(nums1, m, nums2, n)

    expect(nums1).toStrictEqual([1])
  })
})
