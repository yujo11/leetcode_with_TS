function getFactorial(num: bigint): bigint {
  if (num === 0n) return 1n

  return num * getFactorial(num - 1n)
}

function trailingZeroes(n: number): number {
  const factorial = getFactorial(BigInt(n)).toString()
  let count = 0

  for (let i = factorial.length - 1; i > 0; i--) {
    if (factorial[i] === '0') {
      count++
    } else {
      break
    }
  }

  return count
}

describe('trailingZeroes', () => {
  test('case 1', () => {
    expect(trailingZeroes(3)).toBe(0)
  })

  test('case 2', () => {
    expect(trailingZeroes(5)).toBe(1)
  })

  test('case 3', () => {
    expect(trailingZeroes(0)).toBe(0)
  })

  test('edge case 1', () => {
    expect(trailingZeroes(7)).toBe(1)
  })

  test('edge case 2', () => {
    expect(trailingZeroes(30)).toBe(7)
  })
})
