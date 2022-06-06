function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return ''

  let prefix = ''

  for (let i = 0; i < strs[0].length; i++) {
    const target = strs[0][i]

    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== target) return prefix
    }

    prefix += target
  }

  return prefix
}

describe('longestCommonPrefix', () => {
  test('case 1', () => {
    expect(longestCommonPrefix(['flower', 'flow', 'flight'])).toBe('fl')
  })

  test('case 1', () => {
    expect(longestCommonPrefix(['dog', 'racecar', 'car'])).toBe('')
  })
})
