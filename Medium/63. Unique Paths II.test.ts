function uniquePathsWithObstacles(dp: number[][]): number {
  const m = dp.length
  const n = dp[0].length

  if (dp[0][0] === 1) return 0

  dp[0][0] = 1

  for (let i = 1; i < m; i++) {
    if (dp[i][0] === 0 && dp[i - 1][0] === 1) {
      dp[i][0] = 1
    } else {
      dp[i][0] = 0
    }
  }

  for (let j = 1; j < n; j++) {
    if (dp[0][j] === 0 && dp[0][j - 1] === 1) {
      dp[0][j] = 1
    } else {
      dp[0][j] = 0
    }
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (dp[i][j] === 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      } else {
        dp[i][j] = 0
      }
    }
  }

  return dp[m - 1][n - 1]
}

describe('uniquePathsWithObstacles', () => {
  test('case 1', () => {
    expect(
      uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toEqual(2)
  })

  test('case 2', () => {
    expect(
      uniquePathsWithObstacles([
        [0, 1],
        [0, 0],
      ])
    ).toEqual(1)
  })

  test('edge case 1', () => {
    expect(uniquePathsWithObstacles([[1, 0]])).toEqual(0)
  })

  test('edge case 2', () => {
    expect(
      uniquePathsWithObstacles([
        [0, 0],
        [1, 1],
        [0, 0],
      ])
    ).toEqual(0)
  })

  test('edge case 3', () => {
    expect(
      uniquePathsWithObstacles([
        [0, 1, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
      ])
    ).toBe(0)
  })
})
