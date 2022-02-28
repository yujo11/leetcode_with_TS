function twoSum(nums: number[], target: number): number[] {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    if (nums[left] + nums[right] === target) return [left + 1, right + 1];
    else if (nums[left] + nums[right] < target) left++;
    else right--;
  }
}
