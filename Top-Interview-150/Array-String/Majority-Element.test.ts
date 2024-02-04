/**
 * My Solution
 */
// function majorityElement(nums: number[]): number {
//   const obj: Record<number, number> = {}
//   let majorElement = 0
//   let maxValue = 0

//   for (let i = 0; i < nums.length; i++) {
//     if (obj[nums[i]] === undefined) {
//       obj[nums[i]] = 1
//     } else {
//       obj[nums[i]] = obj[nums[i]] + 1
//     }

//     if (obj[nums[i]] >= maxValue) {
//       maxValue = obj[nums[i]]
//       majorElement = nums[i]
//     }
//   }

//   return majorElement
// }

/**
 * LeetCode Solution 1. Sorting
 * 문제 조건에 majority element는 항상 more than n/2번 나타난다고 했으므로
 * 전체를 정렬 했을 때 가운데 있는 숫자가 majority element임을 추론할 수 있다.
 */
// function majorityElement(nums: number[]): number {
//   nums.sort((a, b) => a - b)

//   return nums[Math.floor(nums.length / 2)]
// }

/**
 * LeetCode Solution 2. Boyer-Moore Voting Algorithm
 * Boyer-Moore 과반수 투표 알고리즘으로 배열에 포함 된 원소들 중 과반수만큼 등장하는 원소가 존재할 때 해당 원소를 찾는 알고리즘
 * 배열 내 원소들 중 과반수만큼 등장하는 원소가 없다면 임의의 의미없는 값이 결과로 나옴(딱 절반만큼 등장하는 원소도 마찬가지)
 * *블로그 글 참고 https://sgc109.github.io/2020/11/30/boyer-moore-majority-vote-algorithm/
 */
function majorityElement(nums: number[]): number {
  let counter = 0
  let candidate = -1

  for (let i = 1; i < nums.length; i++) {
    if (counter === 0) {
      candidate = nums[i]
    }

    if (nums[i] === candidate) {
      counter++
    } else {
      counter--
    }
  }
  return candidate
}

describe('Majority Element', () => {
  test('case 1', () => {
    const nums = [3, 2, 3]

    expect(majorityElement(nums)).toBe(3)
  })

  test('case 2', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2]

    expect(majorityElement(nums)).toBe(2)
  })

  test('case 3', () => {
    const nums = [6, 5, 5]

    expect(majorityElement(nums)).toBe(5)
  })
})
