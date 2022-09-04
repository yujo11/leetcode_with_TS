const keyMap = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
}

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) return []

  const result: string[] = []

  const dfs = (index: number, str: string) => {
    if (index === digits.length) {
      result.push(str)
      return
    }

    for (const char of keyMap[digits[index]]) {
      dfs(index + 1, str + char)
    }
  }

  dfs(0, '')

  return result
}

describe('letterCombinations', () => {
  test('case 1', () => {
    expect(letterCombinations('23')).toEqual(['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'])
  })

  test('case 2', () => {
    expect(letterCombinations('')).toEqual([])
  })

  test('case 3', () => {
    expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
  })
})
