function isAnagram(s: string, t: string): boolean {
  return s.split('').sort().join('') === t.split('').sort().join('')
}

describe('isAnagram', () => {
  test('case 1', () => {
    expect(isAnagram('anagram', 'nagaram')).toBe(true)
  })

  test('case 2', () => {
    expect(isAnagram('rat', 'car')).toBe(false)
  })
})
