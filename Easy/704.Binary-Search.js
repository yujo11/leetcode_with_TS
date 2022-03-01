/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/* 
@@ solution 1
*/

var search = function (nums, target) {
  return nums.findIndex((n) => n === target)
}

/*
@@ solution 2
*/

function binarySearch(sortedArray, seekElement) {
  let startIndex = 0
  let endIndex = sortedArray.length - 1

  while (startIndex <= endIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2)
    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex
    }
    if (sortedArray[middleIndex] < seekElement) {
      startIndex = middleIndex + 1
    } else {
      endIndex = middleIndex - 1
    }
  }

  return -1
}

var search = function (nums, target) {
  return binarySearch(
    nums.sort((a, b) => a - b),
    target
  )
}

// test cases

console.log(search([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(search([-1, 0, 3, 5, 9, 12], 2)) // -1
