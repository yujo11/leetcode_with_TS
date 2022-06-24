export {}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

const makeTree = (nums: number[]): TreeNode => {
  const mid = Math.floor(nums.length / 2)

  const node = new TreeNode(nums[mid])
  node.left = makeTree(nums.slice(0, mid - 1))
  node.right = makeTree(nums.slice(mid, nums.length - 1))

  return node
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  return makeTree(nums)
}
