function groupAnagrams(strs: string[]): string[][] {
  const map: Record<string, string[]> = {}

  for (const str of strs) {
    const letter = str.split('').sort().join('')

    if (map[letter]) {
      map[letter].push(str)
    } else {
      map[letter] = [str]
    }
  }

  return Object.values(map)
}

describe('groupAnagrams', () => {
  //   test('case 1', () => {
  //     expect(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat'])).toStrictEqual([
  //       ['bat'],
  //       ['nat', 'tan'],
  //       ['ate', 'eat', 'tea'],
  //     ])
  //   })

  test('case 2', () => {
    expect(groupAnagrams([''])).toStrictEqual([['']])
  })

  test('case 3', () => {
    expect(groupAnagrams(['a'])).toStrictEqual([['a']])
  })
})
