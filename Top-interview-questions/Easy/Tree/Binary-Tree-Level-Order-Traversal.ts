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

function recursive(result: number[][], root: TreeNode | null, depth: number): void {
  if (root === null) return

  if (result.length < depth + 1) {
    result.push([root.val])
  } else {
    result[depth].push(root.val)
  }

  recursive(result, root.left, depth + 1)
  recursive(result, root.right, depth + 1)
}

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) return []

  const result: number[][] = []

  recursive(result, root, 0)

  return result
}
