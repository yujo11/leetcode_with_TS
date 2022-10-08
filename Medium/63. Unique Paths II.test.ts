function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  obstacleGrid = obstacleGrid.map((row) => row.map((cell) => (cell === 1 ? 0 : 1)))

  let answer = 0

  for (let i = 0; i < obstacleGrid.length; i++) {
    for (let j = 0; j < obstacleGrid[i].length; j++) {
      if (i === 0 && j === 0) continue
      if (i === 0) obstacleGrid[i][j] = obstacleGrid[i][j - 1]
      else if (j === 0) obstacleGrid[i][j] = obstacleGrid[i - 1][j]
      else obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1]
    }
  }

  return answer
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
})
