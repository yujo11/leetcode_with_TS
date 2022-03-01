/*
  solution 1

  Time Limit Exceeded
*/

function searchInsert_1(nums: number[], target: number): number {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = left + Math.floor(right / 2)

    if (target > nums[mid]) {
      left = mid + 1
    } else if (target < nums[mid]) {
      right = mid - 1
    } else if (target === nums[mid]) {
      return mid
    }
  }

  return left
}

/*
  solution 2
*/

interface Props {
  nums: number[]
  target: number
  left: number
  right: number
}

function recursive({ nums, target, left, right }: Props): number {
  let mid = Math.floor((left + right) / 2)

  if (left > right) return left

  if (nums[mid] === target) return mid

  if (nums[mid] > target) {
    return recursive({ nums, target, left: left, right: mid - 1 })
  }

  if (nums[mid] < target) {
    return recursive({ nums, target, left: mid + 1, right: right })
  }
}

function searchInsert(nums: number[], target: number): number {
  return recursive({ nums, target, left: 0, right: nums.length - 1 })
}
