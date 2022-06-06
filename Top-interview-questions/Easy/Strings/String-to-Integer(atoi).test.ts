const MIN = -2147483648
const MAX = 2147483647

function myAtoi(s: string): number {
  // if (result < MIN) return MIN
  // if (result > MAX) return MAX

  return 0
}

describe('myAtoi', () => {
  test('case 1', () => {
    expect(myAtoi('42')).toBe(42)
  })

  test('case 2', () => {
    expect(myAtoi('      -42                    ')).toBe(-42)
  })

  test('case 3', () => {
    expect(myAtoi('4193 with words')).toBe(4193)
  })

  test('edge case 1', () => {
    expect(myAtoi('words           and 987')).toBe(0)
  })

  test('edge case 2', () => {
    expect(myAtoi('-91283472332')).toBe(-2147483648)
  })

  test('edge case 3', () => {
    expect(myAtoi('  -0012a42')).toBe(-12)
  })

  test('edge case 4', () => {
    expect(myAtoi('.1')).toBe(0)
  })

  test('edge case 5', () => {
    expect(myAtoi('-+12')).toBe(0)
  })

  test('edge case 6', () => {
    expect(myAtoi('21474836++')).toBe(21474836)
  })
})
