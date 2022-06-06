const MIN = -2147483648
const MAX = 2147483647

function myAtoi(s: string): number {
  let i = 0
  let sign = 1
  let acc = ''

  // 1. Read in and ignore any leading whitespace.

  while (s[i] === ' ') i++

  // 2. Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.

  if (s[i] === '-' || s[i] === '+') {
    if (s[i] === '-') {
      sign = -1
    }

    i++
  }

  // 3. Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.

  while (i < s.length) {
    if (!('0' <= s[i] && s[i] <= '9')) break

    acc += s[i]

    i++
  }

  // 4. Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).)

  const result = Number(acc) * sign

  // 5. If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.

  if (result === -0) return 0
  if (result > MAX) return MAX
  if (result < MIN) return MIN

  // 6. Return the integer as the final result.

  return result
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
