function subtractProductAndSum(n: number): number {
  const nums = n.toString().split('')

  return nums.reduce((acc, cur) => acc * +cur, 1) - nums.reduce((acc, cur) => acc + +cur, 0)
}
