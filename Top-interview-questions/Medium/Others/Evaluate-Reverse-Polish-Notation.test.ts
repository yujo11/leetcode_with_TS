const ops = ['+', '-', '*', '/']

const calc = {
  '+': (a: number, b: number) => a + b,
  '-': (a: number, b: number) => a - b,
  '*': (a: number, b: number) => a * b,
  '/': (a: number, b: number) => Math.trunc(a / b),
}

function evalRPN(tokens: string[]): number {
  const nums: number[] = []

  for (const token of tokens) {
    // * 연산자일 때
    if (ops.includes(token)) {
      const numA = nums.pop() ?? 0
      const numB = nums.pop() ?? 0

      nums.push(calc[token as '+' | '-' | '/' | '*'](numB, numA))

      continue
    }

    // * 숫자일 때
    nums.push(+token)
  }

  return nums.pop() ?? 0
}

describe('evalRPN', () => {
  test('case 1', () => {
    expect(evalRPN(['2', '1', '+', '3', '*'])).toBe(9)
  })

  test('case 2', () => {
    expect(evalRPN(['4', '13', '5', '/', '+'])).toBe(6)
  })

  test('case 3', () => {
    expect(evalRPN(['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'])).toBe(22)
  })
})
