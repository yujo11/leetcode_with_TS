export {}

/**
 * My Solution
 */
// function removeDuplicates(nums: number[]): number {
//   let count = 1
//   let reader = 1

//   for (reader; reader < nums.length; reader++) {
//     if (nums[reader - 1] === nums[reader]) {
//       count++
//     } else {
//       count = 1
//     }

//     if (count >= 3) {
//       nums.splice(reader, 1)
//       reader--
//     }
//   }

//   return nums.length
// }

/**
 * LeetCode Solution 1
 */
// function removeDuplicates(nums: number[]): number {
//   let i = 1
//   let count = 1
//   let length = nums.length

//   while (i < length) {
//     if (nums[i] === nums[i - 1]) {
//       count++

//       if (count > 2) {
//         nums.splice(i, 1)
//         i--
//         length--
//       }
//     } else {
//       count = 1
//     }

//     i++
//   }

//   return length
// }

/**
 * LeetCode Solution 2. Two pointers
 */
function removeDuplicates(nums: number[]): number {
  let replaceIndex = 0

  for (let i = 0; i < nums.length; i++) {
    if (replaceIndex - 2 >= 0 && nums[replaceIndex - 2] === nums[i]) {
      continue
    }

    nums[replaceIndex++] = nums[i]
  }

  return replaceIndex
}

describe('Remove Duplicates from Sorted Array 2', () => {
  test('case 1', () => {
    const nums = [1, 1, 1, 2, 2, 3]

    expect(removeDuplicates(nums)).toBe(5)
    expect(nums.slice(0, 5)).toStrictEqual([1, 1, 2, 2, 3])
  })

  test('case 2', () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3]

    expect(removeDuplicates(nums)).toBe(7)
    expect(nums.slice(0, 7)).toStrictEqual([0, 0, 1, 1, 2, 3, 3])
  })
})
