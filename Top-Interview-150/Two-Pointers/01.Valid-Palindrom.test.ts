/**
 * My Solution 01. using method
 */

// function isPalindrome(s: string): boolean {
//   s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

//   return s === s.split('').reverse().join('')
// }

/**
 * My Solution 02. using two pointers
 */

function isPalindrome(s: string): boolean {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()

  let left = 0
  let right = s.length - 1

  while (left <= right) {
    if (s[left++] !== s[right--]) {
      return false
    }
  }

  return true
}

describe('isPalindrome', () => {
  test('case 1', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true)
  })

  test('case 2', () => {
    expect(isPalindrome('race a car')).toBe(false)
  })

  test('case 3', () => {
    expect(isPalindrome('0P')).toBe(false)
  })

  test('case 4', () => {
    expect(isPalindrome(' ')).toBe(true)
  })
})
