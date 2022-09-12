/**
 Do not return anything, modify nums in-place instead.
 */

// const swap = (nums: number[], i: number, j: number) => {
//   const temp = nums[i]
//   nums[i] = nums[j]
//   nums[j] = temp
// }

// function sortColors(nums: number[]): void {
//   let left = 0
//   let right = nums.length - 1

//   while (left < right) {
//     if (nums[left] === 0) {
//       left++
//       continue
//     }

//     if (nums[left] === 2) {
//       swap(nums, left, right)
//       right--
//       continue
//     }

//     if (nums[left] === 1) {
//       if (nums[right] === 2) {
//         right--
//         continue
//       }

//       if (nums[right] === 0) {
//         swap(nums, left, right)
//         left++
//         continue
//       }

//       if (nums[right] === 1) {
//         right--
//         continue
//       }
//     }
//   }
// }

/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let zero = 0
  let one = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zero++
    } else if (nums[i] === 1) {
      one++
    }
  }

  nums
    .fill(0, 0, zero)
    .fill(1, zero, zero + one)
    .fill(2, zero + one)
}

describe('sort colors', () => {
  it('test case 1', () => {
    const nums = [2, 0, 2, 1, 1, 0]
    sortColors(nums)
    expect(nums).toEqual([0, 0, 1, 1, 2, 2])
  })

  it('test case 2', () => {
    const nums = [2, 0, 1]
    sortColors(nums)
    expect(nums).toEqual([0, 1, 2])
  })

  it('edge case 1', () => {
    const nums = [1, 0, 1]
    sortColors(nums)
    expect(nums).toEqual([0, 1, 1])
  })

  it('edge case 2', () => {
    const nums = [1, 2, 1]
    sortColors(nums)
    expect(nums).toEqual([1, 1, 2])
  })
})
