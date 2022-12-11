function setZeroes(matrix: number[][]): void {
  const map: Record<string, number[]> = {
    col: [],
    row: [],
  }

  // col
  for (let i = 0; i < matrix[0].length; i++) {
    const hasZero = matrix.find((it) => it[i] === 0)

    if (hasZero) {
      map.col.push(i)
    }
  }

  // row
  for (let i = 0; i < matrix.length; i++) {
    const hasZero = matrix[i].includes(0)

    if (hasZero) {
      map.row.push(i)
    }
  }

  for (let i = 0; i < map.row.length; i++) {
    const target = map.row[i]

    matrix[target] = Array.from({ length: matrix[i].length }, (_) => 0)
  }

  for (let i = 0; i < map.col.length; i++) {
    const target = map.col[i]

    matrix.forEach((it) => (it[target] = 0))
  }
}

describe('setZeroes', () => {
  test('case 1', () => {
    const matrix = [
      [1, 1, 1],
      [1, 0, 1],
      [1, 1, 1],
    ]

    setZeroes(matrix)

    expect(matrix).toStrictEqual([
      [1, 0, 1],
      [0, 0, 0],
      [1, 0, 1],
    ])
  })

  test('case 2', () => {
    const matrix = [
      [0, 1, 2, 0],
      [3, 4, 5, 2],
      [1, 3, 1, 5],
    ]

    setZeroes(matrix)

    expect(matrix).toStrictEqual([
      [0, 0, 0, 0],
      [0, 4, 5, 0],
      [0, 3, 1, 0],
    ])
  })

  test('edge case 1', () => {
    const matrix = [[-1], [2], [3]]

    setZeroes(matrix)

    expect(matrix).toStrictEqual([[-1], [2], [3]])
  })
})

/**
 Do not return anything, modify matrix in-place instead.
 */

/**
 * edge case  [[-1], [2], [3]] =>  [[-1], [2], [3]]
 */

function setZeroes_FAIL(matrix: number[][]): void {
  // col
  for (let i = 0; i < matrix[0].length; i++) {
    const hasZero = matrix.find((it) => it[i] === 0)

    if (hasZero) {
      matrix.forEach((it) => (it[i] = it[i] === 0 ? 0 : -1))
    }
  }

  // row
  for (let i = 0; i < matrix.length; i++) {
    const hasZero = matrix[i].includes(0)

    if (hasZero) {
      matrix[i] = Array.from({ length: matrix[i].length }, (_) => -1)
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === -1) {
        matrix[i][j] = 0
      }
    }
  }
}
