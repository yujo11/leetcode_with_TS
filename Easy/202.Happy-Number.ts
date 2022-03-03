function sumOfSquares(num: number): number {
  return num
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Math.pow(+cur, 2), 0)
}

function isHappy(n: number): boolean {
  const vals = []

  while (n !== 1 && !vals.includes(n)) {
    vals.push(n)
    n = sumOfSquares(n)
  }

  return n === 1
}
