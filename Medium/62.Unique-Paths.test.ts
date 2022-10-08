export {}

function uniquePaths(m: number, n: number): number {
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))

  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }

  for (let j = 0; j < n; j++) {
    dp[0][j] = 1
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[m - 1][n - 1]
}

describe('uniquePaths', () => {
  test('case 1', () => {
    expect(uniquePaths(3, 2)).toEqual(3)
  })

  test('case 2', () => {
    expect(uniquePaths(7, 3)).toEqual(28)
  })
})
