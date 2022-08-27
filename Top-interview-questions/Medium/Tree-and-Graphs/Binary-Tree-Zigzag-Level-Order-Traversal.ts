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

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  const map = {}

  function recursive(node: TreeNode | null, level: number = 0): void {
    if (node) {
      if (!map[level]) {
        map[level] = []
      }

      map[level].push(node.val)
      recursive(node.left, level + 1)
      recursive(node.right, level + 1)
    }
  }

  recursive(root)

  for (let i = 0; map[i] !== undefined; i++) {
    if (i % 2 === 1) {
      map[i] = map[i].reverse()
    }
  }

  return Object.values(map)
}
