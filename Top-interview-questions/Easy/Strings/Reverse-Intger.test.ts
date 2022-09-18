function reverse(x: number): number {
  const absReversed = Math.abs(x).toString().split('').reverse().join('')

  if (+absReversed > 2 ** 31) {
    return 0
  }

  return x < 0 ? -+absReversed : +absReversed
}

describe('reverse', () => {
  test('case 1', () => {
    expect(reverse(123)).toBe(321)
  })

  test('case 2', () => {
    expect(reverse(-123)).toBe(-321)
  })

  test('edge case 1', () => {
    expect(reverse(1_534_236_469)).toBe(0)
  })
})
