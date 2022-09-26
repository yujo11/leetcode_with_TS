function isPalindrome(s: string): boolean {
  const filteredString = s
    .split('')
    .filter((char) => /[a-zA-Z0-9]/.test(char))
    .map((char) => char.toLowerCase())

  return filteredString.join('') === filteredString.reverse().join('')
}

describe('isPalindrome', () => {
  test('case 1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  test('case 2', () => {
    expect(isPalindrome('race a car')).toBe(false)
  })

  test('case 3', () => {
    expect(isPalindrome(' ')).toBe(true)
  })
})
