/**
 Do not return anything, modify matrix in-place instead.
 */

function rotate(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      const temp = matrix[i][j]

      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }

  for (let row of matrix) {
    row.reverse()
  }
}
