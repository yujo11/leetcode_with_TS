function isPowerOfThree1(n: number): boolean {
  if (n === 1) return true

  if (n < 9) return false

  for (let i = 1; i <= n; i++) {
    if (3 ** i === n) return true
  }

  return false
}

function isPowerOfThree(n: number): boolean {
  for (let i = 0; 3 ** i <= n; i++) {
    if (3 ** i === n) return true
  }

  return false
}

describe('isPowerOfThree', () => {
  test('case 1', () => {
    expect(isPowerOfThree(27)).toEqual(true)
  })

  test('case 2', () => {
    expect(isPowerOfThree(0)).toEqual(false)
  })

  test('case 3', () => {
    expect(isPowerOfThree(9)).toEqual(true)
  })

  test('edge case 1', () => {
    expect(isPowerOfThree(45)).toEqual(false)
  })

  test('edge case 2', () => {
    expect(isPowerOfThree(1)).toEqual(true)
  })

  test('edge case 3', () => {
    expect(isPowerOfThree(3)).toEqual(true)
  })
})
