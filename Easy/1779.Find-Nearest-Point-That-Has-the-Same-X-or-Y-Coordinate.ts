function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let smallestDistance = Number.MAX_SAFE_INTEGER
  let nearestPointIndex: number = -1

  for (let i = 0; i < points.length; i++) {
    const [pointX, pointY] = points[i]

    if (pointX !== x && pointY !== y) continue

    const distance = Math.abs(pointX - x) + Math.abs(pointY - y)

    if (distance < smallestDistance) {
      smallestDistance = distance
      nearestPointIndex = i
    }
  }

  return nearestPointIndex
}
