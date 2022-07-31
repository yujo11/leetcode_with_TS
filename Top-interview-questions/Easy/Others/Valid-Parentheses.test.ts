function isValid(s: string): boolean {
  const stack: string[] = []

  const map: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  }

  for (let i = 0; i < s.length; i++) {
    const current = s[i]

    if (current === '(' || current === '[' || current === '{') {
      stack.push(current)

      continue
    }

    const last = stack.pop()

    if (!last || map[last] !== current) {
      return false
    }
  }

  return stack.length === 0
}

describe('isValid', () => {
  test('case 1', () => {
    expect(isValid('()')).toBe(true)
  })

  test('case 2', () => {
    expect(isValid('()[]{}')).toBe(true)
  })

  test('case 3', () => {
    expect(isValid('(]')).toBe(false)
  })
})
