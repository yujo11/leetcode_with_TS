function firstUniqChar(s: string): number {
  const map: Record<string, [string, number]> = {}

  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (map[char]) {
      map[char] = ['duplicate', 0]
    } else {
      map[char] = ['unique', i]
    }
  }

  return Object.values(map).filter(([status]) => status === 'unique')[0]?.[1] ?? -1
}

describe('firstUnuniqChar', () => {
  test('case 1', () => {
    expect(firstUniqChar('leetcode')).toBe(0)
  })

  test('case 2', () => {
    expect(firstUniqChar('loveleetcode')).toBe(2)
  })

  test('case 3', () => {
    expect(firstUniqChar('aabb')).toBe(-1)
  })
})
