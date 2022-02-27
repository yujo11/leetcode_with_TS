/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  if (nums.length < 2) {
    return;
  }

  nums = nums.sort((a, b) => {
    if (a === 0 && b === 0) {
      return 0;
    } else if (a === 0) {
      return 1;
    } else if (b === 0) {
      return -1;
    } else {
      return 0;
    }
  });
}
