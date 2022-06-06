function strStr(str: string, target: string): number {
  if (str === target) return 0

  if (!new RegExp(target).test(str)) return -1

  return str.match(target).index
}

describe('strStr', () => {
  test('case 1', () => {
    expect(strStr('hello', 'll')).toBe(2)
  })

  test('case 2', () => {
    expect(strStr('aaaaa', 'bba')).toBe(-1)
  })
})
