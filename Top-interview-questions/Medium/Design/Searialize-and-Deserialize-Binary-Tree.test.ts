export {}

// Definition for a binary tree node.
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

/*
 * Encodes a tree to a single string.
 */
function serialize(root: TreeNode | null): string {
  const data: Array<number | 'null'> = []

  function recursive(node: TreeNode | null): void {
    if (node === null) {
      data.push('null')
      return
    }

    data.push(node.val)
    recursive(node.left)
    recursive(node.right)
  }

  recursive(root)

  return data.join(',')
}

/*
 * Decodes your encoded data to tree.
 */
function deserialize(data: string): TreeNode | null {
  const values = data.split(',').map((v) => (v === 'null' ? null : Number(v)))

  function recursive(): TreeNode | null {
    const val = values.shift()
    if (val === null) return null

    const node = new TreeNode(val)
    node.left = recursive()
    node.right = recursive()

    return node
  }

  return recursive()
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
