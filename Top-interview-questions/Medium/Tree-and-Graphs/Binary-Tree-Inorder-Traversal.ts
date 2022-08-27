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

/**
 * Solution 1 Recursive
 */

function recursive(node: TreeNode | null, result: number[] = []): number[] {
  if (node) {
    result.push(...recursive(node.left))
    result.push(node.val)
    result.push(...recursive(node.right))
  }

  return result
}

function inorderTraversal(root: TreeNode | null): number[] {
  return recursive(root)
}

/**
 * Solution 2
 */

// function inorderTraversal(root: TreeNode | null): number[] {
//   const result: number[] = []
//   const stack: TreeNode[] = []
//   let current: TreeNode | null = root

//   while (current || stack.length) {
//     while (current) {
//       stack.push(current)
//       current = current.left
//     }

//     current = stack.pop() as TreeNode
//     result.push(current.val)
//     current = current.right
//   }

//   return result
// }
