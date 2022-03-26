/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  nums.push(...nums.splice(0, nums.length - (k % nums.length)))
}
