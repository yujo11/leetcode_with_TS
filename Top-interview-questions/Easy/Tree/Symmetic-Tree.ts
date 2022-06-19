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

function recursive(left: TreeNode | null, right: TreeNode | null): boolean {
  // if (left === null && right === null) return true

  // if (!left && right) return false

  // if (left && !right) return false

  if (left === null || right === null) return left === right

  if (left.val !== right.val) return false

  return recursive(left.left, right.right) && recursive(left.right, right.left)
}

function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return false

  return recursive(root.left, root.right)
}
