/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let left = 0
    let right = n

    while (left < right) {
      let mid = 0

      if (left === 0) {
        mid = Math.floor(right / 2)
      } else {
        mid = Math.floor((left + right) / 2)
      }
      console.log('mid', mid)

      // true -> 배드버전임
      // false -> 잘된버전임
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }

    return left
  }
}
