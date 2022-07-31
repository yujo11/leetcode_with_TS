function generate(numRows: number): number[][] {
  const result: number[][] = []

  for (let i = 0; i < numRows; i++) {
    const row: number[] = []

    if (i === 0) {
      result.push([1])
      continue
    }

    if (i === 1) {
      result.push([1, 1])
      continue
    }

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1)
      } else {
        row.push(result[i - 1][j - 1] + result[i - 1][j])
      }
    }

    result.push(row)
  }

  return result
}

describe('generate', () => {
  test('case 1', () => {
    expect(generate(5)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
  })

  test('case 2', () => {
    expect(generate(0)).toEqual([])
  })

  test('case 3', () => {
    expect(generate(1)).toEqual([[1]])
  })
})
