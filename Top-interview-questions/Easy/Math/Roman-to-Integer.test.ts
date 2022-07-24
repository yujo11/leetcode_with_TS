function romanToInt(s: string): number {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let result = 0

  for (let i = 0; i < s.length; i++) {
    const current = map[s[i]]
    const next = map[s[i + 1]] || 0

    if (current < next) {
      result -= current
    } else {
      result += current
    }
  }

  return result
}

describe('romanToInt', () => {
  test('case 1', () => {
    expect(romanToInt('III')).toEqual(3)
  })

  test('case 2', () => {
    expect(romanToInt('LVIII')).toEqual(58)
  })

  test('case 3', () => {
    expect(romanToInt('MCMXCIV')).toEqual(1994)
  })
})
